import React from "react";

interface CheckboxProps {
	texto: string;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

export default function Checkbox({
	texto,
	checked,
	onChange,
	className,
}: CheckboxProps) {
	return (
		<div className={`flex items-center mb-4 border p-2 rounded ${className}`}>
			<label className="mr-2">{texto}</label>
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				className="border rounded"
			/>
		</div>
	);
}
