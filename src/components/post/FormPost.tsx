import { useEffect, useState } from "react";
import { useEventos } from "@/data/hooks/useEventos";
import { useRef } from "react";
import { Button, Input, Select } from "../template";
import tiposPost from "@/core/posts/tipos";
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
	const [postGerado, setPostGerado] = useState<string>("");

	const PostSelecionado = useRef<any>(null);

	useEffect(() => {
		if (!tipoPostSelecionado) return;

		PostSelecionado.current = tiposPost[tipoPostSelecionado!];

		const parametros = PostSelecionado.current.obterParametros();
		setListaParametrosAdicionais(PostSelecionado.current.obterParametros());
	}, [tipoPostSelecionado]);

	const aoSubmeter = (e: React.FormEvent) => {
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

	const aoMudarParametrosAdicionais = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setParametrosAdicionais((prevParams: any) => {
			return {
				...prevParams,
				[name]: value,
			};
		});
	};

	return (
		<form
			onSubmit={aoSubmeter}
			className="my-4 p-4 bg-gray-50 shadow-md rounded-md"
		>
			<Select
				texto="Escolha um evento:"
				id="event"
				valor={eventoSelecionado}
				opcoes={eventos.map((event) => ({
					valor: event.nome,
					texto: event.nome,
				}))}
				onChange={(e) => setEventoSelecionado(e.target.value)}
			/>
			<Select
				texto="Escolha um tipo de post:"
				id="postType"
				valor={tipoPostSelecionado}
				opcoes={possiveisTipos.map((tipo) => ({
					valor: tipo,
					texto: tipo,
				}))}
				onChange={(e: any) => setTipoPostSelecionado(e.target.value)}
			/>
			{listaParametrosAdicionais?.map((param: any) => {
				return (
					<Input
						key={param.nome}
						texto={param.texto}
						id={param.nome}
						tipo={param.tipo}
						nome={param.nome}
						valor={parametrosAdicionais[param.nome] || ""}
						onChange={aoMudarParametrosAdicionais}
						className="w-full p-2 "
					/>
				);
			})}
			<Button
				onClick={() => {}}
				texto="Gerar Post"
				className="w-full p-2 bg-blue-500 text-white rounded-md"
			/>
			<Exibir texto={postGerado} setTexto={setPostGerado} />
		</form>
	);
}
