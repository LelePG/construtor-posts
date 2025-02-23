import { PropriedadesEvento } from "./PropriedadesEvento";

export default class Evento {
	private propriedades: PropriedadesEvento;

	constructor(propriedades: PropriedadesEvento) {
		this.propriedades = {
			...propriedades,
			nome: propriedades.nome.toLowerCase().trim(),
		};
	}

	get nome(): string {
		return this.propriedades.nome.toLowerCase().trim();
	}

	get linkInscricao(): string {
		return this.propriedades.linkInscricao;
	}

	get local(): string {
		return this.propriedades.local;
	}

	get datetime(): Date {
		return this.propriedades.datetime;
	}

	get hashtags(): string {
		return this.propriedades.hashtags;
	}

	get data(): string {
		return this.propriedades.datetime.getDate().toString();
	}

	get hora(): string {
		return this.propriedades.datetime.getTime().toString();
	}

	atualizarPropriedades(propriedades: Partial<PropriedadesEvento>): void {
		this.propriedades = {
			...this.propriedades,
			...propriedades,
		};
	}
}
