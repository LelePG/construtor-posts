import { useState, useEffect } from "react";

export function useResize(elementRef: React.RefObject<HTMLElement | null>) {
	const [resizeState, setResizeState] = useState({
		largura: 200,
		isResizing: false,
		startX: 0,
		startWidth: 200,
	});

	const handleResize = (e: React.MouseEvent) => {
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

	useEffect(() => {
		const element = elementRef.current;
		if (element) {
			element.addEventListener("mousemove", handleMouseMove);
			element.addEventListener("mouseup", handleMouseUp);
		}

		return () => {
			if (element) {
				element.removeEventListener("mousemove", handleMouseMove);
				element.removeEventListener("mouseup", handleMouseUp);
			}
		};
	}, [resizeState.isResizing, elementRef]);

	return { resizeState, handleResize };
}
