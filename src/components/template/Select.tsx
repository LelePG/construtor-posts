interface SelectProps {
	label: string;
	id: string;
	value: string | number | null;
	options: { value: string | number; label: string }[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({
	label,
	id,
	value,
	options,
	onChange,
}: SelectProps) {
	return (
		<div className="mb-4">
			<label
				htmlFor={id}
				className="block text-gray-700 text-sm font-bold mb-2"
			>
				{label}
			</label>
			<select
				id={id}
				value={value ?? ""}
				onChange={onChange}
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			>
				<option value="" disabled>
					Selecione uma opção
				</option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}
