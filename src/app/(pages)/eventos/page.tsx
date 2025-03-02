"use client";
import { useRouter } from "next/navigation";
import { useEventos } from "@/data/hooks/useEventos";
import CardEvento from "@/components/evento/CardEvento";
import Link from "next/link";

export default function PropriedadesEvento() {
	const router = useRouter();
	const { eventos, removerEvento } = useEventos();

	function navegarParaEditar(nome: string) {
		router.push(`/eventos/${nome}`);
	}

	function removerEAtualizar(nome: string) {
		removerEvento(nome);
		router.refresh();
	}

	return (
		<main className="container mx-auto p-4">
			<h2 className="text-4xl font-bold m-6 text-center text-gray-50">
				Gerenciar Eventos
			</h2>
			<Link
				href="/"
				className="my-5 font-bold border border-blue-500 text-blue-500 py-3 px-8 rounded-lg hover:bg-blue-500 hover:text-gray-50"
			>
				Voltar à página inicial
			</Link>
			<div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{eventos.map((evento) => (
					<CardEvento
						key={evento.nome}
						evento={evento}
						editarEvento={navegarParaEditar}
						removerEvento={removerEAtualizar}
					/>
				))}
			</div>
		</main>
	);
}
