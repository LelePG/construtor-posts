export default function useLocalStorage(key: string) {
	function pegarValorStorage() {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : [];
		} catch (error) {
			console.error(error);
			return [];
		}
	}

	const setarValorStorage = (value: any) => {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(error);
		}
	};

	return { pegarValorStorage, setarValorStorage };
}
