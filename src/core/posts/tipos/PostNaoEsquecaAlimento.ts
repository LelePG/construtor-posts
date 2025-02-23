import PostBase from "../PostBase";

export default class PostIngressosEsgotados extends PostBase {
	gerar(): string {
		return this.factory
			.comCabecalhoOrganizacao("Ingressos Esgotados")
			.comTexto(
				`🚨 Os ingressos para o ${this.evento.nome} estão esgotados! 🚨`
			)
			.comTexto(
				`Agradecemos imensamente a todos que garantiram sua presença. Estamos animados para compartilhar momentos incríveis com vocês no dia ${this.evento.data}.`
			)
			.comTexto(`Nos vemos no ${this.evento.nome}!`)
			.comHashtags()
			.comFinalizacao()
			.gerar();
	}
}
