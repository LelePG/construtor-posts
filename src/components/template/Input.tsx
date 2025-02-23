interface InputProps {
	label: string;
	name: string;
	type?: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
	const { label, name, type = "text", placeholder, value, onChange } = props;
	return (
		<div className="mb-4">
			<label
				className="block text-gray-700 text-sm font-bold mb-2"
				htmlFor={name}
			>
				{label}
			</label>
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			/>
		</div>
	);
}
