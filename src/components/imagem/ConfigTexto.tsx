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
		<div className="max-w-72 my-3 flex flex-col gap-4">
			<Input
				tipo="text"
				placeholder="Digite o texto"
				id="texto"
				texto="Texto:"
				valor={config.texto}
				onChange={(e) => aoMudarConfig("texto", e.target.value)}
			/>
			<div className="flex flex-col justify-center gap-4 ">
				<Input
					tipo="color"
					placeholder="Cor do Texto"
					id="cor"
					texto="Cor do Texto:"
					valor={config.cor}
					onChange={(e) => aoMudarConfig("cor", e.target.value)}
					className="flex mt-2 gap-4 items-center w-full text-white"
				/>
				<div className="flex gap-4 items-center mx-4 px-2 pt-2 ">
					<Checkbox
						texto="Negrito:"
						checked={config.negrito}
						onChange={(e) => aoMudarConfig("negrito", e.target.checked)}
						className={`border border-gray-50 ${
							config.negrito ? "bg-green-600" : "bg-transparent"
						}`}
					/>
					<Checkbox
						texto="Itálico:"
						checked={config.italico}
						onChange={(e) => aoMudarConfig("italico", e.target.checked)}
						className={`border border-gray-50 ${
							config.italico ? "bg-green-600" : "bg-transparent"
						}`}
					/>
				</div>
				<div className="flex flex-col gap-4 items-center">
					<Input
						tipo="number"
						placeholder="Tamanho da Fonte"
						id="tamanhoFonte"
						texto="Tamanho da Fonte:"
						valor={config.tamanhoFonte.toString()}
						onChange={(e) =>
							aoMudarConfig("tamanhoFonte", parseInt(e.target.value))
						}
						className="flex gap-4 min-w-64 p-2"
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
						className="flex gap-2 items-center"
					/>
					<Select
						id="justificacao"
						texto="Justificação:"
						valor={config.justificacao}
						onChange={(e) => aoMudarConfig("justificacao", e.target.value)}
						opcoes={[
							{ valor: "esquerda", texto: "Esquerda" },
							{ valor: "centro", texto: "Centro" },
							{ valor: "direita", texto: "Direita" },
						]}
					/>
				</div>
			</div>
		</div>
	);
}
