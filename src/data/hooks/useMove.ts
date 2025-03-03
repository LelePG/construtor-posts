export function useMove(
	elementRef: React.RefObject<HTMLElement | null>,
	posicao: { x: number; y: number },
	setPosicao: (posicao: { x: number; y: number }) => void
) {
	const moverTexto = (e: React.MouseEvent) => {
		e.stopPropagation();
		const xInicial = e.clientX;
		const yInicial = e.clientY;
		const xInicialTexto = posicao.x;
		const yInicialTexto = posicao.y;

		const handleMouseMove = (moveEvent: MouseEvent) => {
			const dx = moveEvent.clientX - xInicial;
			const dy = moveEvent.clientY - yInicial;
			setPosicao({ x: xInicialTexto + dx, y: yInicialTexto + dy });
			moveEvent.preventDefault();
		};

		const element = elementRef.current;

		const handleMouseUp = () => {
			if (!element) {
				return;
			}
			element.removeEventListener("mousemove", handleMouseMove);
			element.removeEventListener("mouseup", handleMouseUp);
		};

		if (!element) {
			return;
		}
		element.addEventListener("mousemove", handleMouseMove);
		element.addEventListener("mouseup", handleMouseUp);

		e.preventDefault();
	};

	return { moverTexto };
}
