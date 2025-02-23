import React from "react";
import { TextoConfig } from "@/core/texto/TextoConfig";

interface TextItemProps {
	textConfig: TextoConfig;
	position: { x: number; y: number };
	onMouseDown: (e: React.MouseEvent) => void;
	onClick: () => void;
}

export default function TextoItem({
	textConfig,
	position,
	onMouseDown,
	onClick,
}: TextItemProps) {
	return (
		<div
			className="absolute"
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
				cursor: "move",
			}}
			onMouseDown={onMouseDown}
			onClick={onClick}
		>
			<span
				className="text-4xl"
				style={{
					color: textConfig.color,
					fontWeight: textConfig.isBold ? "bold" : "normal",
					fontStyle: textConfig.isItalic ? "italic" : "normal",
					fontSize: `${textConfig.fontSize}px`,
					fontFamily: textConfig.fontFamily,
				}}
			>
				{textConfig.text}
			</span>
		</div>
	);
}
