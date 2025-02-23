import { twMerge } from "tailwind-merge";

interface InputProps {
	texto: string;
	id: string;
	tipo?: string;
	placeholder?: string;
	valor: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
	} = props;
	return (
		<div className={twMerge("mb-4", className)}>
			<label
				className="block text-gray-700 text-sm font-bold mb-2"
				htmlFor={id}
			>
				{texto}
			</label>
			<input
				id={id}
				type={tipo}
				placeholder={placeholder}
				value={valor}
				onChange={onChange}
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
	);
}
