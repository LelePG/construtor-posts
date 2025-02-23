interface UploadImagemProps {
	onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadImagem({ onImageUpload }: UploadImagemProps) {
	return (
		<div className="flex justify-center items-center p-4">
			<input
				type="file"
				accept="image/*"
				onChange={onImageUpload}
				className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
			/>
		</div>
	);
}
