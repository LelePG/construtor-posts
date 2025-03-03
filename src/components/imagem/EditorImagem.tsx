import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import UploadImagem from "./UploadImagem";
import ConfigTexto from "./ConfigTexto";
import { TextoConfig } from "@/core/texto/TextoConfig";
import TextoItem from "./TextoItem";
import { Button } from "../template";
import { twMerge } from "tailwind-merge";

interface Texto extends TextoConfig {
	posicao: { x: number; y: number };
}

interface EditorImagemProps {
	className?: string;
}

export default function EditorImagem({ className }: EditorImagemProps) {
	const [imagem, setImagem] = useState<string | null>(null);
	const [textos, setTextos] = useState<Texto[]>([]);
	const [indiceTextoAtual, setIndiceTextoAtual] = useState<number | null>(null);
	const imagemRef = useRef<HTMLDivElement>(null);

	const aoSubirImagem = (e: React.ChangeEvent<HTMLInputElement>) => {
		const arquivo = e.target.files?.[0];
		if (arquivo) {
			const leitor = new FileReader();
			leitor.onloadend = () => {
				setImagem(leitor.result as string);
			};
			leitor.readAsDataURL(arquivo);
		}
	};

	const aoSalvarImagem = async () => {
		if (!imagemRef.current) {
			return;
		}

		const canvas = await html2canvas(imagemRef.current, { scale: 1 });
		const link = document.createElement("a");
		link.href = canvas.toDataURL("image/png");
		link.download = "image-with-text.png";
		link.click();
	};

	const aoSalvarComoSVG = () => {
		if (!imagem || !imagemRef.current) {
			return;
		}

		const svgNS = "http://www.w3.org/2000/svg";
		const svg = document.createElementNS(svgNS, "svg");
		const img = document.createElementNS(svgNS, "image");
		img.setAttributeNS("http://www.w3.org/1999/xlink", "href", imagem);
		img.setAttribute("width", "100%");
		img.setAttribute("height", "100%");

		svg.setAttribute("width", imagemRef.current.clientWidth.toString());
		svg.setAttribute("height", imagemRef.current.clientHeight.toString());
		svg.appendChild(img);

		textos.forEach((texto) => {
			const textElement = document.createElementNS(svgNS, "text");
			textElement.setAttribute("x", texto.posicao.x.toString());
			textElement.setAttribute(
				"y",
				(texto.posicao.y + texto.tamanhoFonte).toString()
			);
			textElement.setAttribute("fill", texto.cor);
			textElement.setAttribute("font-size", texto.tamanhoFonte.toString());
			textElement.setAttribute("font-family", texto.familiaFonte);
			if (texto.negrito) {
				textElement.setAttribute("font-weight", "bold");
			}
			if (texto.italico) {
				textElement.setAttribute("font-style", "italic");
			}

			textElement.textContent = texto.texto;
			svg.appendChild(textElement);
		});

		const serializer = new XMLSerializer();
		const svgString = serializer.serializeToString(svg);
		const blob = new Blob([svgString], { type: "image/svg+xml" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "image-with-text.svg";
		link.click();
		URL.revokeObjectURL(url);
	};

	const aoAdicionarTexto = () => {
		const novoTexto: Texto = {
			texto: "",
			posicao: { x: 0, y: 0 },
			cor: "#000",
			negrito: false,
			italico: false,
			tamanhoFonte: 24,
			familiaFonte: "GoogleSans",
			justificacao: "esquerda",
		};
		setTextos([...textos, novoTexto]);
		setIndiceTextoAtual(textos.length);
	};

	return (
		<div
			className={twMerge(
				" bg-gray-50 rounded-lg container mx-auto p-4",
				className
			)}
		>
			<UploadImagem onImageUpload={aoSubirImagem} />

			<div className="flex flex-col 2xl:flex-row gap-4 p-3 ">
				{imagem && (
					<div className="2xl:w-1/3 min-w-fit w-full flex flex-col border border-blue-800 rounded-lg text-gray-50 bg-blue-500 p-4">
						<div className="my-0 flex 2xl:flex-col gap-2">
							<Button
								onClick={aoAdicionarTexto}
								texto="Adicionar Texto"
								className=" border-2 font-semibold border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-blue-500 bg-blue-500"
							/>
							<Button
								onClick={aoSalvarImagem}
								texto="Salvar Imagem"
								className="w-full border-2 font-semibold border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-blue-500 bg-blue-500"
							/>
							<Button
								onClick={aoSalvarComoSVG}
								texto="Salvar como SVG"
								className="w-full border-2 font-semibold border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-blue-500 bg-blue-500"
							/>
						</div>
						{indiceTextoAtual !== null && textos.length > 0 && (
							<ConfigTexto
								config={textos[indiceTextoAtual]}
								setConfig={(config) => {
									const novosTextos = [...textos];
									novosTextos[indiceTextoAtual] = {
										...config,
										posicao: novosTextos[indiceTextoAtual].posicao,
									};
									setTextos(novosTextos);
								}}
							/>
						)}
					</div>
				)}
				<div ref={imagemRef} className="relative w-2/3 max-h-fit">
					{imagem && (
						<img
							src={imagem}
							alt="Uploaded"
							className="border-2 border-black  object-cover max-h-fit"
							onClick={(e) => {
								setIndiceTextoAtual(null);
							}}
						/>
					)}

					{imagem &&
						textos.map((obj, index) => (
							<TextoItem
								config={obj}
								key={index}
								posicao={obj.posicao}
								setPosicao={(posicao) => {
									const novosTextos = [...textos];
									novosTextos[index] = {
										...novosTextos[index],
										posicao,
									};
									setTextos(novosTextos);
								}}
								isSelecionado={indiceTextoAtual === index}
								onClick={() => setIndiceTextoAtual(index)}
							/>
						))}
				</div>
			</div>
		</div>
	);
}
