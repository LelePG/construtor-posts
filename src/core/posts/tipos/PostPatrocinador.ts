import PostBase from "../PostBase";

export default class PostPatrocinador extends PostBase {
	static obterParametros() {
		return [{ nome: "Patrocinador", label: "patrocinador", tipo: "string" }];
	}

	gerar({ patrocinador }: { patrocinador: string }): string {
		return this.factory
			.comCabecalhoOrganizacao(`Patrocinador ${patrocinador.trim()}`)
			.comTexto(
				`🤝 O ${patrocinador.trim()} é um patrocinador oficial do ${
					this.evento.nome
				}!`
			)
			.comTexto(
				`Agradecemos demais por possibilitar que o ${this.evento.nome} seja possível!`
			)
			.comFinalizacao()
			.gerar();
	}
}
