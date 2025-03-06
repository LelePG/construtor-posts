import { useCallback } from "react";

export default function useLocalStorage(key: string) {
	const pegarValorStorage = useCallback(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : [];
		} catch (error) {
			console.error(error);
			return [];
		}
	}, [key]);

	const setarValorStorage = useCallback(
		(value: any) => {
			try {
				window.localStorage.setItem(key, JSON.stringify(value));
			} catch (error) {
				console.error(error);
			}
		},
		[key]
	);

	return { pegarValorStorage, setarValorStorage };
}
