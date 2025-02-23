import React, { useState } from "react";
import { useEventos } from "@/data/hooks/useEventos";
import PostTipo from "@/core/posts/PostTipo";
import Select from "../template/Select";

export default function FormPost() {
	const { eventos, obterEvento } = useEventos();
	const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
	const [selectedPostType, setSelectedPostType] = useState<string | null>(null);
	const tiposPost = PostTipo.listarTiposDePost();

	const handleEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedEvent(e.target.value);
	};

	const handlePostTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedPostType(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (selectedEvent && selectedPostType) {
			console.log(
				`Evento: ${selectedEvent}, Tipo de Post: ${selectedPostType}`
			);
			const evento = obterEvento(selectedEvent);
			if (!evento) {
				console.log("Evento não encontrado.");
				return;
			}
			const gerador = new PostTipo(evento);
			const textoPost = gerador[selectedPostType]();
			console.log(textoPost);
		} else {
			console.log("Por favor, selecione um evento e um tipo de post.");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<Select
				label="Escolha um evento:"
				id="event"
				value={selectedEvent}
				options={eventos.map((event) => ({
					value: event.nome,
					label: event.nome,
				}))}
				onChange={handleEventChange}
			/>
			<Select
				label="Escolha um tipo de post:"
				id="postType"
				value={selectedPostType}
				options={tiposPost.map((tipo) => ({
					value: tipo,
					label: tipo,
				}))}
				onChange={handlePostTypeChange}
			/>
			<button type="submit">Gerar Post</button>
		</form>
	);
}
