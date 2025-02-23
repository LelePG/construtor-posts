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
		const dia = this.propriedades.datetime
			.getDate()
			.toString()
			.padStart(2, "0");
		const mes = (this.propriedades.datetime.getMonth() + 1)
			.toString()
			.padStart(2, "0");
		const ano = this.propriedades.datetime.getFullYear();
		return `${dia}/${mes}/${ano}`;
	}

	get hora(): string {
		const hora = this.propriedades.datetime
			.getHours()
			.toString()
			.padStart(2, "0");
		const minuto = this.propriedades.datetime
			.getMinutes()
			.toString()
			.padStart(2, "0");
		return `${hora}:${minuto}`;
	}

	atualizarPropriedades(propriedades: Partial<PropriedadesEvento>): void {
		this.propriedades = {
			...this.propriedades,
			...propriedades,
		};
	}
}
