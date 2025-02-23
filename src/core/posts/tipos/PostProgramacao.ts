import PostBase from "../PostBase";

export default class PostProgramacao extends PostBase {
	gerar(): string {
		return this.factory
			.comCabecalhoOrganizacao("Programação")
			.comTexto(`🕖 Olha a programação do ${this.evento.nome} na sua timeline!`)
			.comTexto(
				`O ${this.evento.nome} está chegando e a programação já está disponível! Confira as palestras incríveis que vão rolar nesse evento.`
			)
			.comInscricaoELocal()
			.comFinalizacao()
			.gerar();
	}
}
