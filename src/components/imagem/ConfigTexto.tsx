import Checkbox from "../template/Checkbox";
import Input from "../template/Input";
import Select from "../template/Select";
import { TextoConfig } from "@/core/texto/TextoConfig";

interface ConfigTextoProps {
	config: TextoConfig;
	setConfig: (config: TextoConfig) => void;
}

export default function ConfigTexto({ config, setConfig }: ConfigTextoProps) {
	const handleChange = (key: string, value: any) => {
		setConfig({ ...config, [key]: value });
	};

	return (
		<div className="p-4">
			<div className="flex flex-wrap gap-4 border p-4 rounded">
				<Input
					type="color"
					placeholder="Cor do Texto"
					name="textColor"
					label="Cor do Texto:"
					value={config.color}
					onChange={(e) => handleChange("color", e.target.value)}
					className="border rounded"
				/>
				<Checkbox
					label="Negrito:"
					checked={config.isBold}
					onChange={(e) => handleChange("isBold", e.target.checked)}
					className={config.isBold ? "bg-green-200" : ""}
				/>
				<Checkbox
					label="Itálico:"
					checked={config.isItalic}
					onChange={(e) => handleChange("isItalic", e.target.checked)}
					className={config.isItalic ? "bg-green-200" : ""}
				/>
				<Input
					type="number"
					placeholder="Tamanho da Fonte"
					name="fontSize"
					label="Tamanho da Fonte:"
					value={config.fontSize.toString()}
					onChange={(e) => handleChange("fontSize", parseInt(e.target.value))}
					className="w-20 p-2 border rounded"
				/>
				<Select
					id="fontFamily"
					label="Fonte:"
					value={config.fontFamily}
					onChange={(e) => handleChange("fontFamily", e.target.value)}
					options={[
						{ value: "GoogleSans", label: "GoogleSans" },
						{ value: "Arial", label: "Arial" },
						{ value: "Times New Roman", label: "Times New Roman" },
					]}
					className="p-2 border rounded"
				/>
			</div>
			<div className="mb-4">
				<Input
					type="text"
					placeholder="Digite o texto"
					name="texto"
					label="Texto:"
					value={config.text}
					onChange={(e) => handleChange("text", e.target.value)}
					className="w-full p-2 border rounded"
				/>
			</div>
		</div>
	);
}
