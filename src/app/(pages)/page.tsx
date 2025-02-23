"use client";
import Link from "next/link";
import FormPost from "@/components/post/FormPost";
import EditorImagem from "@/components/imagem/EditorImagem";

export default function Home() {
	return (
		<main className="flex flex-col-reverse md:flex-row gap-6 p-5">
			<section className="w-2/5">
				<h2 className="text-4xl font-bold mb-6 text-center text-gray-50">
					Descrição da Postagem
				</h2>
				<Link
					href="/propriedades-evento"
					className="my-5 font-bold border border-blue-500 text-blue-500 py-3 px-8 rounded-lg hover:bg-blue-500 hover:text-gray-50"
				>
					Criar Novo Evento
				</Link>
				<FormPost />
			</section>
			<section className="w-3/5">
				<h2 className="text-4xl font-bold mb-6 text-center text-gray-50">
					Imagem da Postagem
				</h2>
				<EditorImagem />
			</section>
		</main>
	);
}
