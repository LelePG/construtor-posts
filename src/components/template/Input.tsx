import { twMerge } from "tailwind-merge";
import Label from "./Label";
interface InputProps {
	texto: string;
	id: string;
	tipo?: string;
	placeholder?: string;
	valor: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	nome: string;
	className?: string;
}

export default function Input(props: InputProps) {
	const {
		texto,
		id,
		tipo = "text",
		placeholder,
		valor,
		onChange,
		className,
		nome,
	} = props;
	return (
		<div className={twMerge(className)}>
			<Label texto={texto} para={id} />
			<input
				id={id}
				type={tipo}
				placeholder={placeholder}
				name={nome}
				value={valor}
				onChange={onChange}
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
	);
}
