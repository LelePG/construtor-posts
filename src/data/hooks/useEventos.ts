import { useContext } from "react";
import { EventoContext } from "@/data/context/EventoContext";

export function useEventos() {
	const context = useContext(EventoContext);
	if (!context) {
		throw new Error(
			"useEventoContext precisa ser usado dentro de EventoProvider"
		);
	}
	return context;
}
