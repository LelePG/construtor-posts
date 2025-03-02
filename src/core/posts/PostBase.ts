import PostFactory from "./PostFactory";
import Evento from "../evento/Evento";

export default abstract class PostBase {
	protected factory: PostFactory;
	protected readonly evento: Evento;

	constructor(evento: Evento) {
		this.factory = new PostFactory(evento);
		this.evento = evento;
	}

	static obterParametros(): {
		nome: string;
		tipo: string;
		texto: string;
	}[] {
		return [];
	}

	abstract gerar(parametros: any): string;
}
