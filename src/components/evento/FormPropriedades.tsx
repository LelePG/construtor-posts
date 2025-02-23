"use client";
import React, { useState } from "react";
import { Button, Input } from "../template";
import { PropriedadesEvento } from "@/core/evento/PropriedadesEvento";
import { useEventos } from "@/data/hooks/useEventos";

interface FormPropriedadesProps {
	aposEnviar?: () => void;
}

export default function FormPropriedades({
	aposEnviar,
}: FormPropriedadesProps) {
	const eventos = useEventos();
	const [propriedades, setPropriedades] = useState<PropriedadesEvento>({
		nome: "",
		linkInscricao: "",
		local: "",
		datetime: new Date(),
		hashtags: "",
	});

	const aoModificarPropriedade = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPropriedades((prevState) => ({
			...prevState,
			[name]: name === "datetime" ? new Date(value) : value,
		}));
	};

	const aoSubmeter = (e: React.FormEvent) => {
		e.preventDefault();
		eventos.adicionarEvento(propriedades);
		if (aposEnviar) {
			aposEnviar();
		}
	};

	return (
		<form onSubmit={aoSubmeter} className="max-w-lg mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Criar Postagem</h1>
			<Input
				texto="Evento"
				id="nome"
				valor={propriedades.nome}
				onChange={aoModificarPropriedade}
			/>
			<Input
				texto="Link de Inscrição"
				id="linkInscricao"
				valor={propriedades.linkInscricao}
				onChange={aoModificarPropriedade}
			/>
			<Input
				texto="Local"
				id="local"
				valor={propriedades.local}
				onChange={aoModificarPropriedade}
			/>
			<Input
				texto="Data"
				id="datetime"
				tipo="date"
				valor={propriedades.datetime.toISOString().split("T")[0]}
				onChange={aoModificarPropriedade}
			/>
			<Input
				texto="Hora"
				id="hora"
				tipo="time"
				valor={propriedades.datetime.toTimeString().split(" ")[0]}
				onChange={aoModificarPropriedade}
			/>
			<Input
				texto="Hashtags"
				id="hashtags"
				valor={propriedades.hashtags}
				onChange={aoModificarPropriedade}
			/>
			<Button
				onClick={() => {}}
				texto="Salvar"
				className="bg-blue-500 hover:bg-blue-700"
			/>
		</form>
	);
}
