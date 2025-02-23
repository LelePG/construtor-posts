import { PropriedadesEvento } from "./PropriedadesEvento";
import Evento from "./Evento";

export default class GerenciadorEventos {
	private eventos: Evento[] = [];

	criar(propriedades: PropriedadesEvento): void {
		this.eventos.push(new Evento(propriedades));
	}

	ler(nome: string): Evento | undefined {
		return this.eventos.find(
			(evento) => evento.nome === nome.toLowerCase().trim()
		);
	}

	atualizar(nome: string, propriedades: Partial<PropriedadesEvento>): void {
		const index = this.eventos.findIndex(
			(evento) => evento.nome === nome.toLowerCase().trim()
		);
		this.eventos[index].atualizarPropriedades(propriedades);
	}

	deletar(nome: string): boolean {
		const index = this.eventos.findIndex(
			(evento) => evento.nome === nome.toLowerCase().trim()
		);
		if (index !== -1) {
			this.eventos.splice(index, 1);
			return true;
		}
		return false;
	}

	listarEventos(): Evento[] {
		return this.eventos;
	}
}
