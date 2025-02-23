import React, { createContext, useState, ReactNode, useContext } from "react";
import { PropriedadesEvento } from "@/core/evento/PropriedadesEvento";
import GerenciadorEventos from "@/core/evento/GerenciadorEventos";
import Evento from "@/core/evento/Evento";

interface EventoContextProps {
	eventos: Evento[];
	adicionarEvento: (evento: PropriedadesEvento) => void;
	removerEvento: (id: string) => void;
	atualizarEvento: (nome: string, evento: PropriedadesEvento) => void;
}

export const EventoContext = createContext<EventoContextProps | undefined>(
	undefined
);

export const EventoProvider = ({ children }: { children: ReactNode }) => {
	const gerenciadorEventos = React.useRef(new GerenciadorEventos()).current;
	const [eventos, setEventos] = useState<Evento[]>([]);

	function adicionarEvento(propriedades: PropriedadesEvento) {
		gerenciadorEventos.criar(propriedades);
		setEventos(gerenciadorEventos.listarEventos());
	}

	function removerEvento(id: string) {
		gerenciadorEventos.deletar(id);
		setEventos(gerenciadorEventos.listarEventos());
	}

	function atualizarEvento(nome: string, evento: PropriedadesEvento) {
		gerenciadorEventos.atualizar(nome, evento);
		setEventos(gerenciadorEventos.listarEventos());
	}

	return (
		<EventoContext.Provider
			value={{ eventos, adicionarEvento, removerEvento, atualizarEvento }}
		>
			{children}
		</EventoContext.Provider>
	);
};
