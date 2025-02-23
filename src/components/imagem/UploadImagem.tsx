import Label from "../template/Label";

interface UploadImagemProps {
	onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadImagem({ onImageUpload }: UploadImagemProps) {
	return (
		<div className="w-full">
			<Label texto="Imagem Base:" para="imagem" />
			<input
				id="imagem"
				type="file"
				accept="image/*"
				onChange={onImageUpload}
				className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 rounded-md file:border-0 file:text-sm bg-gray-200 file:font-semibold file:bg-blue-500 file:text-white"
			/>
		</div>
	);
}
