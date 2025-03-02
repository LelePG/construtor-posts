import React, { useState } from "react";
import { TextoConfig } from "@/core/texto/TextoConfig";

interface TextItemProps {
	config: TextoConfig;
	posicao: { x: number; y: number };
	onMouseDown: (e: React.MouseEvent) => void;
	onClick: () => void;
}

export default function TextoItem({
	config,
	posicao,
	onMouseDown,
	onClick,
}: TextItemProps) {
	const [resizeState, setResizeState] = useState({
		largura: 200,
		isResizing: false,
		startX: 0,
		startWidth: 200,
	});

	let alinhamento: React.CSSProperties["textAlign"] = "left";

	if (config.justificacao === "centro") {
		alinhamento = "center";
	} else if (config.justificacao === "direita") {
		alinhamento = "right";
	}

	const handleMouseDownResize = (e: React.MouseEvent) => {
		e.stopPropagation();
		setResizeState((prevState) => ({
			...prevState,
			isResizing: true,
			startX: e.clientX,
			startWidth: prevState.largura,
		}));
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (resizeState.isResizing) {
			const newWidth =
				resizeState.startWidth + (e.clientX - resizeState.startX);
			setResizeState((prevState) => ({
				...prevState,
				largura: newWidth > 50 ? newWidth : 70,
			}));
		}
	};

	const handleMouseUp = () => {
		setResizeState((prevState) => ({
			...prevState,
			isResizing: false,
		}));
	};

	React.useEffect(() => {
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [resizeState.isResizing]);

	return (
		<div
			className="absolute border-2 border-red-500 leading-tight cursor-move"
			style={{
				left: `${posicao.x}px`,
				top: `${posicao.y}px`,
				textAlign: alinhamento,
				width: `${resizeState.largura}px`,
				color: config.cor,
				fontWeight: config.negrito ? "bold" : "normal",
				fontStyle: config.italico ? "italic" : "normal",
				fontFamily: config.familiaFonte,
				fontSize: `${config.tamanhoFonte}px`,
			}}
			onMouseDown={onMouseDown}
			onClick={onClick}
		>
			{config.texto}

			<div
				onMouseDown={handleMouseDownResize}
				className="w-1 h-full bg-blue-500 cursor-ew-resize absolute right-0 top-0"
			/>
		</div>
	);
}
