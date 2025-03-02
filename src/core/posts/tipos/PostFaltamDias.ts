import PostBase from "../PostBase";

export default class PostFaltamDias extends PostBase {
	static obterParametros(): {
		texto: string;
		tipo: string;
		nome: string;
	}[] {
		return [{ texto: "Dias Faltantes", nome: "diasFaltantes", tipo: "number" }];
	}

	gerar({ diasFaltantes }: { diasFaltantes: number }): string {
		return this.factory
			.comTexto(
				`⏳ Faltam ${String(diasFaltantes).padStart(2, "0")} dias para o ${
					this.evento.nome
				}`
			)
			.comTexto(
				`O ${this.evento.nome} está chegando e ainda dá tempo de garantir o seu ingresso.`
			)
			.comInscricaoELocal()
			.comHashtags()
			.gerar();
	}
}
