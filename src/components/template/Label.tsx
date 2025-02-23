import { twMerge } from "tailwind-merge";

interface LabelProps {
	texto: string;
	para: string;
	className?: string;
}

export default function Label(props: LabelProps) {
	const { texto, para, className } = props;
	return (
		<label
			htmlFor={para}
			className={twMerge("my-1 block min-w-fit text-md font-bold ", className)}
		>
			{texto}
		</label>
	);
}
