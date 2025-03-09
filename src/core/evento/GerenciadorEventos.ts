import { PropriedadesEvento } from "./PropriedadesEvento";
import Evento from "./Evento";

export default class GerenciadorEventos {
	private eventos: Evento[] = [];

	carregar(propriedades: PropriedadesEvento[]): void {
		if (!propriedades) return;

		propriedades.forEach((propriedades) => {
			this.criar({
				...propriedades,
				datetime: new Date(propriedades.datetime),
			});
		});
	}

	criar(propriedades: PropriedadesEvento): void {
		this.eventos.push(new Evento(propriedades));
	}

	atualizar(id: string, propriedades: Partial<PropriedadesEvento>): void {
		const index = this.eventos.findIndex(
			(evento) => evento.id === id.toLowerCase().trim()
		);
		this.eventos[index].atualizarPropriedades(propriedades);
	}

	deletar(id: string): boolean {
		const index = this.eventos.findIndex(
			(evento) => evento.id === id.toLowerCase().trim()
		);
		if (index !== -1) {
			this.eventos.splice(index, 1);
			return true;
		}
		return false;
	}

	obter(id: string): Evento | undefined {
		return this.eventos.find((evento) => evento.id === id.toLowerCase().trim());
	}

	listarEventos(): Evento[] {
		return this.eventos;
	}
}
