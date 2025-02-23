"use client";
import FormPropriedades from "@/components/evento/FormPropriedades";
import { useRouter } from "next/navigation";
export default function PropriedadesEvento() {
	const router = useRouter();
	function redirecionar() {
		router.push("/");
	}

	return (
		<div>
			<FormPropriedades afterSubmit={redirecionar} />
		</div>
	);
}
