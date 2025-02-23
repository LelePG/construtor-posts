"use client";
import React, { useState } from "react";
import Input from "../template/Input";
import { PropriedadesEvento } from "@/core/evento/PropriedadesEvento";
import { useEventos } from "@/data/hooks/useEventos";

interface FormPropriedadesProps {
	afterSubmit?: () => void;
}

export default function FormPropriedades({
	afterSubmit,
}: FormPropriedadesProps) {
	const eventos = useEventos();
	const [propriedades, setPropriedades] = useState<PropriedadesEvento>({
		nome: "",
		linkInscricao: "",
		local: "",
		datetime: new Date(),
		hashtags: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPropriedades((prevState) => ({
			...prevState,
			[name]: name === "datetime" ? new Date(value) : value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		eventos.adicionarEvento(propriedades);
		if (afterSubmit) {
			afterSubmit();
		}
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Criar Postagem</h1>
			<Input
				label="Evento"
				name="nome"
				value={propriedades.nome}
				onChange={handleChange}
			/>
			<Input
				label="Link de Inscrição"
				name="linkInscricao"
				value={propriedades.linkInscricao}
				onChange={handleChange}
			/>
			<Input
				label="Local"
				name="local"
				value={propriedades.local}
				onChange={handleChange}
			/>
			<Input
				label="Data"
				name="datetime"
				type="date"
				value={propriedades.datetime.toISOString().split("T")[0]}
				onChange={handleChange}
			/>
			<Input
				label="Hora"
				name="hora"
				type="time"
				value={propriedades.datetime.toTimeString().split(" ")[0]}
				onChange={handleChange}
			/>
			<Input
				label="Hashtags"
				name="hashtags"
				value={propriedades.hashtags}
				onChange={handleChange}
			/>
			<button
				type="submit"
				className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
			>
				Salvar
			</button>
		</form>
	);
}
