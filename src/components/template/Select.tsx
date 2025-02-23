import { twMerge } from "tailwind-merge";

interface SelectProps {
	texto: string;
	id: string;
	valor: string | number | null;
	opcoes: { valor: string | number; texto: string }[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	className?: string;
}
export default function Select(props: SelectProps) {
	const { texto, id, valor, opcoes, onChange, className } = props;
	return (
		<div className={twMerge("mb-4", className)}>
			<label
				htmlFor={id}
				className="block text-gray-700 text-sm font-bold mb-2"
			>
				{texto}
			</label>
			<select
				name={id}
				value={valor ?? ""}
				onChange={onChange}
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			>
				<option value="" disabled>
					Selecione uma opção
				</option>
				{opcoes.map((opcao) => (
					<option key={opcao.valor} value={opcao.valor}>
						{opcao.texto}
					</option>
				))}
			</select>
		</div>
	);
}
