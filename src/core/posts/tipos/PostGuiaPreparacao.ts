import PostBase from "../PostBase";

export default class PostGuiaPreparacao extends PostBase {
	gerar(): string {
		return this.factory
			.comCabecalhoOrganizacao("Guia de Preparação")
			.comTexto(`⏳ O ${this.evento.nome} está chegando!`)
			.comTexto(
				"Não esquece de conferir o nosso guia de preparação com algumas informações importantes!"
			)
			.comFinalizacao()
			.gerar();
	}
}
