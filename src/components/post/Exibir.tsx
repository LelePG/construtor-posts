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
		<div className="mt-4 p-4 bg-white rounded-md shadow-md min-h-90">
			<textarea
				value={texto}
				onChange={(e) => setTexto(e.target.value)}
				className="mb-4 p-2 border rounded w-full text-gray-800 h-full"
				rows={6}
			/>
			<Button
				onClick={aoCopiar}
				className={`px-4 py-2 rounded ${
					copiar ? "bg-green-500 text-white" : "bg-blue-500 text-white"
				} transition-colors duration-300`}
				texto={copiar ? "Copiado!" : "Copiar"}
			/>
		</div>
	);
}
