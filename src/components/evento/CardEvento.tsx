import Evento from "@/core/evento/Evento";
import React from "react";
import { Button } from "../template";

interface CardEventoProps {
	evento: Evento;
	removerEvento: (id: string) => void;
	editarEvento: (id: string) => void;
}

export default function CardEvento({
	evento,
	removerEvento,
	editarEvento,
}: CardEventoProps) {
	return (
		<div className="p-4 bg-white rounded-lg shadow-md">
			<h2 className="text-xl font-bold mb-2">{evento.nome}</h2>
			<p className="text-gray-600">Data: {evento.data}</p>
			<p className="text-gray-600">Hora: {evento.hora}</p>
			<p className="text-gray-600">Local: {evento.local}</p>
			<p className="text-gray-600">Hashtags: {evento.hashtags}</p>
			<p className="text-gray-600">Inscrição: {evento.linkInscricao}</p>
			<div className="flex gap-4">
				<Button texto="Editar" onClick={() => editarEvento(evento.id)} />
				<Button
					texto="Excluir"
					className="bg-red-500 hover:bg-red-700"
					onClick={() => removerEvento(evento.id)}
				/>
			</div>
		</div>
	);
}
