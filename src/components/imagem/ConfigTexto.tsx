import { TextoConfig } from "@/core/texto/TextoConfig";
import { Checkbox, Input, Select } from "../template";

interface ConfigTextoProps {
	config: TextoConfig;
	setConfig: (config: TextoConfig) => void;
}

export default function ConfigTexto({ config, setConfig }: ConfigTextoProps) {
	function aoMudarConfig(key: string, value: any) {
		setConfig({ ...config, [key]: value });
	}

	return (
		<div className="2xl:max-w-72 my-3 flex flex-wrap 2xl:flex-col gap-4 items-baseline  w-full ">
			<Input
				tipo="text"
				placeholder="Digite o texto"
				id="texto"
				texto="Texto:"
				valor={config.texto}
				onChange={(e) => aoMudarConfig("texto", e.target.value)}
				className=" 2xl:w-full"
			/>
			<Input
				tipo="color"
				placeholder="Cor do Texto"
				id="cor"
				texto="Cor do Texto:"
				valor={config.cor}
				onChange={(e) => aoMudarConfig("cor", e.target.value)}
				className="  min-w-40 text-white  2xl:w-full"
			/>
			<div className="flex my-3 gap-3  2xl:w-full ">
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
			<Input
				tipo="number"
				placeholder="Tamanho da Fonte"
				id="tamanhoFonte"
				texto="Tamanho da Fonte:"
				valor={config.tamanhoFonte.toString()}
				onChange={(e) =>
					aoMudarConfig("tamanhoFonte", parseInt(e.target.value))
				}
				className=" 2xl:w-full"
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
				className="w-fit p-0 2xl:w-full"
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
				className="w-fit p-0 2xl:w-full"
			/>
		</div>
	);
}
