import React, { useState, useRef, useEffect } from "react";
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

	useEffect(() => {
		aoAdicionarTexto();
	}, []);

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
		const canvas = await html2canvas(imagemRef.current);
		const link = document.createElement("a");
		link.href = canvas.toDataURL("image/png");
		link.download = "image-with-text.png";
		link.click();
	};

	const aoClicar = (index: number) => (e: React.MouseEvent) => {
		const xInicial = e.clientX;
		const yInicial = e.clientY;
		const xInicialTexto = textos[index].posicao.x;
		const yInicialTexto = textos[index].posicao.y;

		const handleMouseMove = (moveEvent: MouseEvent) => {
			const dx = moveEvent.clientX - xInicial;
			const dy = moveEvent.clientY - yInicial;

			const novos = [...textos];
			novos[index].posicao = {
				x: xInicialTexto + dx,
				y: yInicialTexto + dy,
			};
			setTextos(novos);

			moveEvent.preventDefault();
		};

		const handleMouseUp = () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);

		e.preventDefault();
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
				"mt-14 bg-gray-50 rounded-lg container mx-auto p-4",
				className
			)}
		>
			<div className="flex items-end">
				<UploadImagem onImageUpload={aoSubirImagem} />
			</div>

			{imagem && indiceTextoAtual !== null && (
				<div className="flex gap-4 my-5 p-3">
					<div className="flex  flex-col   border border-blue-800 rounded-lg text-gray-50 bg-blue-500 p-4">
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
						<Button
							onClick={aoAdicionarTexto}
							texto="Adicionar Texto"
							className="w-full border-2 font-semibold border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-blue-500 bg-blue-500"
						/>
						<Button
							onClick={aoSalvarImagem}
							texto="Salvar Imagem"
							className="mt-4 w-full border-2 font-semibold border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-blue-500 bg-blue-500"
						/>
					</div>
					<div ref={imagemRef} className="relative max-w-screen-lg">
						{imagem && (
							<img
								src={imagem}
								alt="Uploaded"
								className="border-2 border-black  object-cover "
							/>
						)}

						{imagem &&
							textos.map((obj, index) => (
								<TextoItem
									config={obj}
									key={index}
									posicao={obj.posicao}
									onMouseDown={aoClicar(index)}
									onClick={() => setIndiceTextoAtual(index)}
								/>
							))}
					</div>
				</div>
			)}
		</div>
	);
}
