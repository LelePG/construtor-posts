import PostBase from "../PostBase";

export default class PostPatrocinador extends PostBase {
	static obterParametros() {
		return [{ texto: "Patrocinador", nome: "patrocinador", tipo: "string" }];
	}

	gerar({ patrocinador }: { patrocinador: string }): string {
		return this.factory
			.comTexto(
				`🤝 O ${patrocinador.trim()} é um patrocinador oficial do ${
					this.evento.nome
				}!`
			)
			.comTexto(
				`Agradecemos demais por possibilitar que o ${this.evento.nome} seja possível!`
			)
			.comHashtags()
			.gerar();
	}
}
