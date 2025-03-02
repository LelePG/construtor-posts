"use client";
import { useRouter } from "next/navigation";
import { useEventos } from "@/data/hooks/useEventos";
import CardEvento from "@/components/evento/CardEvento";
import Link from "next/link";

export default function PropriedadesEvento() {
	const router = useRouter();
	const { eventos, removerEvento } = useEventos();

	function navegarParaEditar(id: string) {
		router.push(`/eventos/${id}`);
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
			<div className="flex gap-4">
				<Link
					href="/"
					className="font-bold border border-blue-500 text-blue-500 py-3 px-8 rounded-lg hover:bg-blue-500 hover:text-gray-50"
				>
					Voltar à página inicial
				</Link>

				<Link
					href="/eventos/novo"
					className="font-bold border border-green-500 text-green-500 py-3 px-8 rounded-lg hover:bg-green-500 hover:text-gray-50"
				>
					Novo Evento
				</Link>
			</div>
			<div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{eventos.map((evento) => (
					<CardEvento
						key={evento.id}
						evento={evento}
						editarEvento={navegarParaEditar}
						removerEvento={removerEAtualizar}
					/>
				))}
			</div>
		</main>
	);
}
