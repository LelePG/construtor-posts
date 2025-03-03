import { TextoConfig } from "@/core/texto/TextoConfig";
import { useRef } from "react";
import { useResize } from "@/data/hooks/useResize";
import { useMove } from "@/data/hooks/useMove";

interface TextItemProps {
	config: TextoConfig;
	posicao: { x: number; y: number };
	setPosicao: (posicao: { x: number; y: number }) => void;
	isSelecionado: boolean;
	onClick: () => void;
}

const getAlinhamento = (
	justificacao: string
): React.CSSProperties["textAlign"] => {
	switch (justificacao) {
		case "centro":
			return "center";
		case "direita":
			return "right";
		default:
			return "left";
	}
};

export default function TextoItem({
	config,
	posicao,
	setPosicao,
	onClick,
	isSelecionado,
}: TextItemProps) {
	const divRef = useRef<HTMLDivElement>(null);
	const { resizeState, handleResize } = useResize(divRef);
	const { moverTexto } = useMove(divRef, posicao, setPosicao);

	return (
		<div
			ref={divRef}
			className={`absolute border-2 leading-tight cursor-move select-none ${
				isSelecionado ? "border-red-500" : "border-transparent"
			}`}
			style={{
				left: `${posicao.x}px`,
				top: `${posicao.y}px`,
				textAlign: getAlinhamento(config.justificacao),
				width: `${resizeState.largura}px`,
				color: config.cor,
				fontWeight: config.negrito ? "bold" : "normal",
				fontStyle: config.italico ? "italic" : "normal",
				fontFamily: config.familiaFonte,
				fontSize: `${config.tamanhoFonte}px`,
			}}
			onMouseDown={moverTexto}
			onClick={onClick}
		>
			{config.texto}

			<div
				onMouseDown={handleResize}
				className={`w-1 h-full ${
					isSelecionado ? "bg-fuchsia-500" : "bg-transparent"
				} cursor-ew-resize absolute right-0 top-0`}
			/>
		</div>
	);
}
