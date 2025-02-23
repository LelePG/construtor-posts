import PostBase from "../PostBase";

export default class PostLoteComCamiseta extends PostBase {
	gerar(): string {
		return this.factory
			.comCabecalhoOrganizacao("Ingressos Abertos")
			.comTexto(`🎫 Os ingressos para o ${this.evento.nome} estão abertos!`)
			.comTexto(
				"E nesse evento, além de ter o melhor preço, os ingressos do primeiro lote tem uma novidade: agora você pode optar por um ingresso que inclui uma camiseta oficial do evento além do ingresso comum."
			)
			.comTexto("Garanta logo o seu ingresso e a sua camiseta!")
			.comInscricaoELocal()
			.comFinalizacao()
			.gerar();
	}
}
