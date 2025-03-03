"use client";
import FormPropriedades from "@/components/evento/FormPropriedades";
import { useEventos } from "@/data/hooks/useEventos";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function Evento() {
	const { salvarEvento, obterEvento } = useEventos();
	const router = useRouter();
	const { id } = useParams();
	const evento = obterEvento(id as string);

	return (
		<div>
			<FormPropriedades
				props={evento?.propriedades}
				salvar={(propriedades) => {
					salvarEvento(propriedades);
					router.push("/eventos");
				}}
				cancelar={() => {
					router.push("/eventos");
				}}
			/>
			;
		</div>
	);
}
