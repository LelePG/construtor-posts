import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import UploadImagem from "./UploadImagem";
import ConfigTexto from "./ConfigTexto";
import { TextoConfig } from "@/core/texto/TextoConfig";
import TextoItem from "./TextoItem";
import { Button } from "../template";

interface Texto extends TextoConfig {
	posicao: { x: number; y: number };
}

export default function EditorImagem() {
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
			cor: "#ffffff",
			negrito: false,
			italico: false,
			tamanhoFonte: 24,
			familiaFonte: "GoogleSans",
		};
		setTextos([...textos, novoTexto]);
		setIndiceTextoAtual(textos.length);
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Editor de Imagem</h1>
			<UploadImagem onImageUpload={aoSubirImagem} />
			<Button
				onClick={aoAdicionarTexto}
				texto="Adicionar Texto"
				className="mt-4"
			/>
			{indiceTextoAtual !== null && (
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
			<div ref={imagemRef} className="relative mt-4">
				{imagem && (
					<img
						src={imagem}
						alt="Uploaded"
						className="w-full h-full object-cover"
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
			<Button
				onClick={aoSalvarImagem}
				texto="Salvar Imagem"
				className="mt-4 bg-blue-500 hover:bg-blue-700"
			/>
		</div>
	);
}
