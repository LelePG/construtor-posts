"use client";
import FormPropriedades from "@/components/evento/FormPropriedades";
import { useEventos } from "@/data/hooks/useEventos";
import Image from "next/image";
import Link from "next/link";
import FormPost from "@/components/post/FormPost";

export default function Home() {
	const eventos = useEventos();

	return (
		<div>
			<Link href="/propriedades-evento">Criar novo Evento</Link>
			<FormPost />
		</div>
	);
}
