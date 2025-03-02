import PostBase from "../PostBase";

export default class PostC4P extends PostBase {
	gerar(): string {
		return this.factory
			.comTexto(
				"🎤 Que tal compartilhar seus conhecimentos sobre tecnologia com a comunidade?"
			)
			.comTexto(
				`O call for papers para o ${this.evento.nome} que acontecerá dia ${this.evento.data} em Pelotas está aberto, e essa é a sua oportunidade de compartilhar seus conhecimentos sobre tecnologia com a comunidade. Não deixe de submeter a sua palestra, e qualquer dúvida, manda uma mensagem pra gente!`
			)
			.comInscricaoELocal()
			.comHashtags()
			.gerar();
	}
}
