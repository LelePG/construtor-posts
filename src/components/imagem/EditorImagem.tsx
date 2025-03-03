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

			<div className="flex gap-4 p-3 ">
				{imagem && (
					<div className="w-1/3 flex flex-col border border-blue-800 rounded-lg text-gray-50 bg-blue-500 p-4">
						<div className="my-0 flex flex-col gap-2">
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
				<div ref={imagemRef} className="relative w-2/3">
					{imagem && (
						<img
							src={imagem}
							alt="Uploaded"
							className="border-2 border-black  object-cover "
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
