"use client";
import React, { useState } from "react";
import { Button, Input } from "../template";
import { PropriedadesEvento } from "@/core/evento/PropriedadesEvento";

interface FormPropriedadesProps {
	props?: PropriedadesEvento;
	salvar: (propriedades: PropriedadesEvento) => void;
	cancelar: () => void;
}

export default function FormPropriedades({
	props,
	salvar,
	cancelar,
}: FormPropriedadesProps) {
	const [propriedades, setPropriedades] = useState<PropriedadesEvento>({
		id: props?.id || "",
		nome: props?.nome || "",
		linkInscricao: props?.linkInscricao || "",
		local: props?.local || "",
		datetime: props?.datetime || new Date(),
		hashtags: props?.hashtags || "",
	});

	const aoModificarPropriedade = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setPropriedades((prevState) => ({
			...prevState,
			[id]: id === "datetime" ? new Date(value) : value,
		}));
	};

	return (
		<div className="max-w-lg mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Criar Postagem</h1>
			<Input
				texto="ID"
				id="id"
				valor={propriedades.id}
				onChange={aoModificarPropriedade}
			/>
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
			<div className="flex gap-4">
				<Button
					onClick={() => salvar(propriedades)}
					texto="Salvar"
					className="bg-blue-500 hover:bg-blue-700"
				/>

				<Button
					onClick={cancelar}
					texto="Cancelar"
					className="bg-red-500 hover:bg-red-700"
				/>
			</div>
		</div>
	);
}
