import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import UploadImagem from "./UploadImagem";
import ConfigTexto from "./ConfigTexto";
import { TextoConfig } from "@/core/texto/TextoConfig";
import TextoItem from "./TextoItem";

interface TextObject extends TextoConfig {
	text: string;
	position: { x: number; y: number };
	color: string;
	isBold: boolean;
	isItalic: boolean;
	fontSize: number;
	fontFamily: string;
}

export default function EditorImagem() {
	const [image, setImage] = useState<string | null>(null);
	const [texts, setTexts] = useState<TextObject[]>([]);
	const [currentTextIndex, setCurrentTextIndex] = useState<number | null>(null);
	const imageRef = useRef<HTMLDivElement>(null);

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSaveImage = async () => {
		if (imageRef.current) {
			const canvas = await html2canvas(imageRef.current);
			const link = document.createElement("a");
			link.href = canvas.toDataURL("image/png");
			link.download = "image-with-text.png";
			link.click();
		}
	};

	const handleMouseDown = (index: number) => (e: React.MouseEvent) => {
		const startX = e.clientX;
		const startY = e.clientY;
		const initialX = texts[index].position.x;
		const initialY = texts[index].position.y;

		const handleMouseMove = (moveEvent: MouseEvent) => {
			const dx = moveEvent.clientX - startX;
			const dy = moveEvent.clientY - startY;

			const newTexts = [...texts];
			newTexts[index].position = {
				x: initialX + dx,
				y: initialY + dy,
			};
			setTexts(newTexts);

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

	const handleAddText = () => {
		const newText: TextObject = {
			text: "",
			position: { x: 0, y: 0 },
			color: "#ffffff",
			isBold: false,
			isItalic: false,
			fontSize: 24,
			fontFamily: "GoogleSans",
		};
		setTexts([...texts, newText]);
		setCurrentTextIndex(texts.length);
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Editor de Imagem</h1>
			<UploadImagem onImageUpload={handleImageUpload} />
			<button
				onClick={handleAddText}
				className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
			>
				Adicionar Texto
			</button>
			{currentTextIndex !== null && (
				<ConfigTexto
					config={texts[currentTextIndex]}
					setConfig={(config) => {
						const newTexts = [...texts];
						newTexts[currentTextIndex] = {
							...config,
							position: newTexts[currentTextIndex].position,
						};
						setTexts(newTexts);
					}}
				/>
			)}
			<div ref={imageRef} className="relative mt-4">
				{image && (
					<img
						src={image}
						alt="Uploaded"
						className="w-full h-full object-cover"
					/>
				)}

				{image &&
					texts.map((textObj, index) => (
						<TextoItem
							textConfig={textObj}
							key={index}
							position={textObj.position}
							onMouseDown={handleMouseDown(index)}
							onClick={() => setCurrentTextIndex(index)}
						/>
					))}
			</div>
			<button
				onClick={handleSaveImage}
				className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
			>
				Salvar Imagem
			</button>
		</div>
	);
}
