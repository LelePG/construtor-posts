import { PropriedadesEvento } from "./PropriedadesEvento";

export default class Evento {
	private _propriedades: PropriedadesEvento;

	constructor(propriedades: PropriedadesEvento) {
		this._propriedades = {
			...propriedades,
			nome: propriedades.nome.trim(),
		};
	}

	get propriedades(): PropriedadesEvento {
		return this._propriedades;
	}

	get id(): string {
		return this._propriedades.id;
	}

	get nome(): string {
		return this._propriedades.nome;
	}

	get linkInscricao(): string {
		return this._propriedades.linkInscricao;
	}

	get local(): string {
		return this._propriedades.local;
	}

	get datetime(): Date {
		return this._propriedades.datetime;
	}

	get hashtags(): string {
		return this._propriedades.hashtags;
	}

	get data(): string {
		const dia = this._propriedades.datetime
			.getDate()
			.toString()
			.padStart(2, "0");
		const mes = (this._propriedades.datetime.getMonth() + 1)
			.toString()
			.padStart(2, "0");
		const ano = this._propriedades.datetime.getFullYear();
		return `${dia}/${mes}/${ano}`;
	}

	get hora(): string {
		const hora = this._propriedades.datetime
			.getHours()
			.toString()
			.padStart(2, "0");
		const minuto = this._propriedades.datetime
			.getMinutes()
			.toString()
			.padStart(2, "0");
		return `${hora}:${minuto}`;
	}

	atualizarPropriedades(propriedades: Partial<PropriedadesEvento>): void {
		this._propriedades = {
			...this._propriedades,
			...propriedades,
		};
	}
}
