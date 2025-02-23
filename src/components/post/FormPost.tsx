import React, { useEffect, useState } from "react";
import { useEventos } from "@/data/hooks/useEventos";
import Select from "../template/Select";
import tiposPost from "@/core/posts/tipos";
import Input from "../template/Input";
import { useRef } from "react";
import Exibir from "./Exibir";

export default function FormPost() {
	const { eventos, obterEvento } = useEventos();
	const [eventoSelecionado, setEventoSelecionado] = useState<string | null>(
		null
	);
	const [tipoPostSelecionado, setTipoPostSelecionado] = useState<
		keyof typeof tiposPost | null
	>(null);
	const [listaParametrosAdicionais, setListaParametrosAdicionais] =
		useState<any>([]);
	const [parametrosAdicionais, setParametrosAdicionais] = useState<any>({});
	const possiveisTipos = Object.keys(tiposPost);
	const [postGerado, setPostGerado] = useState<string | null>(null);

	const PostSelecionado = useRef<any>(null);

	useEffect(() => {
		if (!tipoPostSelecionado) return;

		PostSelecionado.current = tiposPost[tipoPostSelecionado!];

		const parametros = PostSelecionado.current.obterParametros();
		console.log(parametros);
		setListaParametrosAdicionais(PostSelecionado.current.obterParametros());
	}, [tipoPostSelecionado]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (eventoSelecionado && tipoPostSelecionado) {
			const evento = obterEvento(eventoSelecionado);

			if (!evento) {
				console.log("Evento não encontrado.");
				return;
			}
			const gerador = new PostSelecionado.current(evento);
			const texto = gerador.gerar(parametrosAdicionais);
			setPostGerado(texto);
		} else {
			console.log("Por favor, selecione um evento e um tipo de post.");
		}
	};

	const handleAdditionalParamChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setParametrosAdicionais((prevParams: any) => ({
			...prevParams,
			[name]: value,
		}));
	};

	return (
		<form onSubmit={handleSubmit}>
			<Select
				label="Escolha um evento:"
				id="event"
				value={eventoSelecionado}
				options={eventos.map((event) => ({
					value: event.nome,
					label: event.nome,
				}))}
				onChange={(e) => setEventoSelecionado(e.target.value)}
			/>
			<Select
				label="Escolha um tipo de post:"
				id="postType"
				value={tipoPostSelecionado}
				options={possiveisTipos.map((tipo) => ({
					value: tipo,
					label: tipo,
				}))}
				onChange={(e: any) => setTipoPostSelecionado(e.target.value)}
			/>
			{listaParametrosAdicionais?.map((param: any) => {
				return (
					<Input
						key={param.nome}
						label={param.nome}
						name={param.label}
						type={param.tipo}
						value={parametrosAdicionais[param.label] || ""}
						onChange={handleAdditionalParamChange}
					/>
				);
			})}
			<button type="submit">Gerar Post</button>
			{postGerado && <Exibir texto={postGerado} setTexto={setPostGerado} />}
		</form>
	);
}
