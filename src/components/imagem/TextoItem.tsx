import React from "react";
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
	return (
		<div
			className="absolute"
			style={{
				left: `${posicao.x}px`,
				top: `${posicao.y}px`,
				cursor: "move",
			}}
			onMouseDown={onMouseDown}
			onClick={onClick}
		>
			<span
				className="text-4xl leading-tight"
				style={{
					color: config.cor,
					fontWeight: config.negrito ? "bold" : "normal",
					fontStyle: config.italico ? "italic" : "normal",
					fontSize: `${config.tamanhoFonte}px`,
					fontFamily: config.familiaFonte,
				}}
			>
				{config.texto}
			</span>
		</div>
	);
}
