import PostBase from "../PostBase";

export default class PostHorasComplementares extends PostBase {
	gerar(): string {
		return this.factory
			.comTexto("📣 Precisando de horas complementares para a faculdade?")
			.comTexto(
				`O ${this.evento.nome} terá certificado de participação com a carga horária correspondente ao evento. Se você está precisando de horas complementares, não perca essa oportunidade!`
			)
			.comTexto(`Te esperamos no ${this.evento.nome}!`)
			.comInscricaoELocal()
			.comHashtags()
			.gerar();
	}
}
