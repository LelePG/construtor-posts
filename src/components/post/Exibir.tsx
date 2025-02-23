import React, { useState } from "react";

interface ExibirProps {
	texto: string;
	setTexto: (texto: string) => void;
}

export default function Exibir({ texto, setTexto }: ExibirProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(texto);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="p-4 bg-white rounded shadow-md min-h-90">
			<textarea
				value={texto}
				onChange={(e) => setTexto(e.target.value)}
				className="mb-4 p-2 border rounded w-full text-gray-800 h-full"
				rows={6}
			/>
			<button
				onClick={handleCopy}
				className={`px-4 py-2 rounded ${
					copied ? "bg-green-500 text-white" : "bg-blue-500 text-white"
				} transition-colors duration-300`}
			>
				{copied ? "Copiado!" : "Copiar"}
			</button>
		</div>
	);
}
