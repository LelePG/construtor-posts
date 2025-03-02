import PostBase from "../PostBase";

export default class PostApoiador extends PostBase {
	static obterParametros() {
		return [{ texto: "Apoiador", nome: "apoiador", tipo: "string" }];
	}

	gerar({ apoiador }: { apoiador: string }): string {
		return this.factory
			.comTexto(
				`🤝 O ${apoiador.trim()} é um patrocinador oficial do ${this.evento}!`
			)
			.comTexto(
				`Agradecemos demais por possibilitar que o ${this.evento} seja possível!`
			)
			.comHashtags()
			.gerar();
	}
}
