import { useState } from "react";
import Button from "../template/Button";

interface ExibirProps {
	texto: string;
	setTexto: (texto: string) => void;
}

export default function Exibir({ texto, setTexto }: ExibirProps) {
	const [copiar, setCopiar] = useState(false);

	const aoCopiar = () => {
		navigator.clipboard.writeText(texto);
		setCopiar(true);
		setTimeout(() => setCopiar(false), 2000);
	};

	return (
		<div className="mt-4  ">
			<textarea
				value={texto}
				onChange={(e) => setTexto(e.target.value)}
				className="min-h-80 p-2 border rounded w-full text-gray-800"
				placeholder="Digite o seu texto ou selecione o tipo de post e clique em Gerar Post"
				rows={6}
			/>
			<Button
				onClick={aoCopiar}
				className={`px-4 rounded ${
					copiar ? "bg-green-500 text-white" : "bg-blue-500 text-white"
				} transition-colors duration-300`}
				texto={copiar ? "Copiado!" : "Copiar"}
			/>
		</div>
	);
}
