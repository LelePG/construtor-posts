import PostBase from "../PostBase";

export default class PostTragaSeuLixo extends PostBase {
	gerar(): string {
		return this.factory
			.comTexto(`🗑️ Ponto de Coleta de Lixo Tecnológico no ${this.evento.nome}`)
			.comTexto(
				"Você tem algum eletrônico que não usa mais? Que tal trazê-lo para descarte no ponto de coleta do Pelotas Parque Tecnológico? Você ajuda o meio ambiente e ainda libera um espacinho a mais na sua casa!"
			)
			.comInscricaoELocal()
			.comHashtags()
			.gerar();
	}
}
