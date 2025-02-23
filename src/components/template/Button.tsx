import { twMerge } from "tailwind-merge";

interface ButtonProps {
	onClick: () => void;
	texto: string;
	className?: string;
}

export default function Button(props: ButtonProps) {
	const { onClick, texto, className } = props;
	return (
		<button
			onClick={onClick}
			className={twMerge(
				"mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700",
				className
			)}
		>
			{texto}
		</button>
	);
}
