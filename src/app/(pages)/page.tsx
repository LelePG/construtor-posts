"use client";
import Link from "next/link";
import FormPost from "@/components/post/FormPost";
import EditorImagem from "@/components/imagem/EditorImagem";

export default function Home() {
	return (
		<main className="flex flex-col lg:flex-row gap-6 p-10">
			<section className="lg:w-2/5">
				<h2 className="text-4xl font-bold mb-6 text-center text-gray-50">
					Descrição da Postagem
				</h2>
				<Link
					href="/eventos"
					className=" block w-fit font-bold border border-blue-500 text-blue-500 py-3 px-8 rounded-lg hover:bg-blue-500 hover:text-gray-50"
				>
					Gerenciar Eventos
				</Link>
				<FormPost />
			</section>
			<section className="lg:w-3/5">
				<h2 className="text-4xl font-bold mb-6 text-center text-gray-50">
					Imagem da Postagem
				</h2>
				<EditorImagem />
			</section>
		</main>
	);
}
