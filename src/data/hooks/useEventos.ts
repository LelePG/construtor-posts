import { useContext } from "react";
import { EventoContext } from "@/data/context/EventoContext";

export const useEventos = () => {
	const context = useContext(EventoContext);
	if (!context) {
		throw new Error("useEventoContext must be used within an EventoProvider");
	}
	return context;
};
