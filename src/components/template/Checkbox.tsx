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
		<div
			className={`flex  font-semibold items-center mb-2 p-2 rounded ${className}`}
		>
			<label className="mr-2">{texto}</label>
			<input type="checkbox" checked={checked} onChange={onChange} />
		</div>
	);
}
