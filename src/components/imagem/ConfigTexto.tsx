import { TextoConfig } from "@/core/texto/TextoConfig";
import { Checkbox, Input, Select } from "../template";

interface ConfigTextoProps {
	config: TextoConfig;
	setConfig: (config: TextoConfig) => void;
}

export default function ConfigTexto({ config, setConfig }: ConfigTextoProps) {
	const aoMudarConfig = (key: string, value: any) => {
		setConfig({ ...config, [key]: value });
	};

	return (
		<div className="p-4">
			<div className="flex flex-wrap gap-4 border p-4 rounded">
				<Input
					tipo="color"
					placeholder="Cor do Texto"
					id="cor"
					texto="Cor do Texto:"
					valor={config.cor}
					onChange={(e) => aoMudarConfig("cor", e.target.value)}
					className="border rounded"
				/>
				<Checkbox
					texto="Negrito:"
					checked={config.negrito}
					onChange={(e) => aoMudarConfig("negrito", e.target.checked)}
					className={config.negrito ? "bg-green-200" : ""}
				/>
				<Checkbox
					texto="Itálico:"
					checked={config.italico}
					onChange={(e) => aoMudarConfig("italico", e.target.checked)}
					className={config.italico ? "bg-green-200" : ""}
				/>
				<Input
					tipo="number"
					placeholder="Tamanho da Fonte"
					id="tamanhoFonte"
					texto="Tamanho da Fonte:"
					valor={config.tamanhoFonte.toString()}
					onChange={(e) =>
						aoMudarConfig("tamanhoFonte", parseInt(e.target.value))
					}
					className="w-20 p-2 border rounded"
				/>
				<Select
					id="familiaFonte"
					texto="Fonte:"
					valor={config.familiaFonte}
					onChange={(e) => aoMudarConfig("familiaFonte", e.target.value)}
					opcoes={[
						{ valor: "GoogleSans", texto: "GoogleSans" },
						{ valor: "Arial", texto: "Arial" },
						{ valor: "Times New Roman", texto: "Times New Roman" },
					]}
					className="p-2 border rounded"
				/>
			</div>
			<div className="mb-4">
				<Input
					tipo="text"
					placeholder="Digite o texto"
					id="texto"
					texto="Texto:"
					valor={config.texto}
					onChange={(e) => aoMudarConfig("texto", e.target.value)}
					className="w-full p-2 border rounded"
				/>
			</div>
		</div>
	);
}
