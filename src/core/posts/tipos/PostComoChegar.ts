import PostBase from "../PostBase";

export default class PostComoChegar extends PostBase {
	gerar(): string {
		return this.factory
			.comTexto(`⏳ O ${this.evento.nome} está chegando!`)
			.comTexto(
				`O ${this.evento.nome} acontecerá dia ${this.evento.data} no ${this.evento.local}.`
			)
			.comTexto(
				`O credenciamento começa às ${this.evento.hora} e recomendamos que você se planeje para chegar ao local do evento com antecedência para evitar transtornos.`
			)
			.comTexto(
				"Tem alguma dúvida de como chegar ao local do evento? Dá uma olhadinha no nosso guia!"
			)
			.comHashtags()
			.gerar();
	}
}
