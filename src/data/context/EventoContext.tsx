import React, { createContext, useState, ReactNode, useEffect } from "react";
import { PropriedadesEvento } from "@/core/evento/PropriedadesEvento";
import GerenciadorEventos from "@/core/evento/GerenciadorEventos";
import Evento from "@/core/evento/Evento";

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

	useEffect(() => {
		gerenciadorEventos.criar({
			nome: "Evento Muito Legal",
			linkInscricao: "https://www.google.com",
			local: "Pelotas Parque tecnológico",
			datetime: new Date("2025-02-23T13:59:01.882Z"),
			hashtags: "#teste #vaiDarCerto",
			id: "1",
		});
		gerenciadorEventos.criar({
			nome: "ww",
			linkInscricao: "ww",
			local: "ww",
			datetime: new Date("2025-02-23T13:59:07.013Z"),
			hashtags: "ww",
			id: "2",
		});
		setEventos(gerenciadorEventos.listarEventos());
	}, []);

	function adicionarEvento(propriedades: PropriedadesEvento) {
		gerenciadorEventos.criar(propriedades);
		setEventos(gerenciadorEventos.listarEventos());
	}

	function removerEvento(id: string) {
		gerenciadorEventos.deletar(id);
		setEventos(gerenciadorEventos.listarEventos());
	}

	function atualizarEvento(id: string, evento: PropriedadesEvento) {
		console.log("atualizando evento", id, evento);
		gerenciadorEventos.atualizar(id, evento);
		setEventos(gerenciadorEventos.listarEventos());
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
