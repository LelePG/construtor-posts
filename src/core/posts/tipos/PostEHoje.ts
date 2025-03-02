import PostBase from "../PostBase";

export default class EHoje extends PostBase {
	gerar(): string {
		const dataPostagem = this.evento.datetime;
		const dataFormatada = new Intl.DateTimeFormat("pt-BR").format(dataPostagem);
		return this.factory
			.comDivisorInicio()
			.comTituloOrganizacao(`É hoje!`)
			.comTexto(`Data da postagem: ${dataFormatada}`)
			.comDivisorIntermediario()
			.comTexto(`🎉 O ${this.evento.nome} é hoje!`)
			.comTexto(
				`Esperamos todo mundo logo mais no ${this.evento.local} às ${this.evento.hora}.`
			)
			.comFinalizacao()
			.gerar();
	}
}
