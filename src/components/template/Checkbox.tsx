import React from "react";

interface CheckboxProps {
	label: string;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

export default function Checkbox({
	label,
	checked,
	onChange,
	className,
}: CheckboxProps) {
	return (
		<div className={`flex items-center mb-4 border p-2 rounded ${className}`}>
			<label className="mr-2">{label}</label>
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				className="border rounded"
			/>
		</div>
	);
}
