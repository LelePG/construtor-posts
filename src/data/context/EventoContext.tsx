import React, { createContext, useState, ReactNode, useEffect } from "react";
import { PropriedadesEvento } from "@/core/evento/PropriedadesEvento";
import GerenciadorEventos from "@/core/evento/GerenciadorEventos";
import Evento from "@/core/evento/Evento";
import useLocalStorage from "../hooks/useLocalStorage";

interface EventoContextProps {
	eventos: Evento[];
	salvarEvento: (evento: PropriedadesEvento) => void;
	removerEvento: (id: string) => void;
	obterEvento: (id: string) => Evento | undefined;
}

export const EventoContext = createContext<EventoContextProps | undefined>(
	undefined
);

export const EventoProvider = ({ children }: { children: ReactNode }) => {
	const gerenciadorEventos = React.useRef(new GerenciadorEventos()).current;
	const [eventos, setEventos] = useState<Evento[]>([]);
	const { pegarValorStorage, setarValorStorage } = useLocalStorage("eventos");

	function refreshEventos() {
		const eventos = gerenciadorEventos.listarEventos();
		setarValorStorage(eventos.map((evento) => evento.propriedades));
		setEventos(eventos);
	}

	useEffect(() => {
		const eventos = pegarValorStorage();
		gerenciadorEventos.carregar(eventos);
		refreshEventos();
	}, []);

	function adicionarEvento(propriedades: PropriedadesEvento) {
		gerenciadorEventos.criar(propriedades);
		refreshEventos();
	}

	function removerEvento(id: string) {
		gerenciadorEventos.deletar(id);
		refreshEventos();
	}

	function atualizarEvento(id: string, evento: PropriedadesEvento) {
		gerenciadorEventos.atualizar(id, evento);
		refreshEventos();
	}

	function obterEvento(id: string): Evento | undefined {
		return gerenciadorEventos.obter(id);
	}

	function salvarEvento(props: PropriedadesEvento) {
		if (props.id && obterEvento(props.id)) {
			atualizarEvento(props.id, props);
		} else {
			adicionarEvento(props);
		}
	}

	return (
		<EventoContext.Provider
			value={{
				eventos,
				salvarEvento,
				removerEvento,
				obterEvento,
			}}
		>
			{children}
		</EventoContext.Provider>
	);
};
