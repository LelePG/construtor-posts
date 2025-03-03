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

	function validaPropriedades(chave: string, valor: any) {
		if (chave === "data") {
			const [year, month, day] = valor.split("-");
			const novaData = new Date(propriedades.datetime);
			novaData.setFullYear(parseInt(year, 10));
			novaData.setMonth(parseInt(month, 10) - 1);
			novaData.setDate(parseInt(day, 10));
			return novaData;
		} else if (chave === "hora") {
			const [hours, minutes] = valor.split(":");
			const novaData = new Date(propriedades.datetime);
			novaData.setHours(parseInt(hours, 10));
			novaData.setMinutes(parseInt(minutes, 10));
			return novaData;
		}
		return valor;
	}

	function aoModificarPropriedade(e: React.ChangeEvent<HTMLInputElement>) {
		const { id, value } = e.target;
		const chave = id === "data" || id === "hora" ? "datetime" : id;
		setPropriedades((prevState) => ({
			...prevState,
			[chave]: validaPropriedades(id, value),
		}));
	}

	return (
		<div className="max-w-lg mx-auto  rounded-lg  p-4">
			<h2 className="text-4xl font-bold m-6 text-center text-gray-50">
				Criar Postagem
			</h2>
			<div className="space-y-4 bg-white p-6  shadow-md rounded-lg">
				<Input
					texto="ID"
					id="id"
					valor={propriedades.id}
					onChange={aoModificarPropriedade}
					className="w-full"
				/>
				<Input
					texto="Evento"
					id="nome"
					valor={propriedades.nome}
					onChange={aoModificarPropriedade}
					className="w-full"
				/>
				<Input
					texto="Link de Inscrição"
					id="linkInscricao"
					valor={propriedades.linkInscricao}
					onChange={aoModificarPropriedade}
					className="w-full"
				/>
				<Input
					texto="Local"
					id="local"
					valor={propriedades.local}
					onChange={aoModificarPropriedade}
					className="w-full"
				/>
				<Input
					texto="Data"
					id="data"
					tipo="date"
					valor={propriedades.datetime.toISOString().split("T")[0]}
					onChange={aoModificarPropriedade}
					className="w-full"
				/>
				<Input
					texto="Hora"
					id="hora"
					tipo="time"
					valor={propriedades.datetime.toTimeString().split(" ")[0]}
					onChange={aoModificarPropriedade}
					className="w-full"
				/>
				<Input
					texto="Hashtags"
					id="hashtags"
					valor={propriedades.hashtags}
					onChange={aoModificarPropriedade}
					className="w-full"
				/>
				<div className="flex gap-4 mt-6">
					<Button
						onClick={() => salvar(propriedades)}
						texto="Salvar"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					/>
					<Button
						onClick={cancelar}
						texto="Cancelar"
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
					/>
				</div>
			</div>
		</div>
	);
}
