import PostBase from "../PostBase";

export default class PostNaoEsquecaCopo extends PostBase {
	gerar(): string {
		return this.factory
			.comTexto(`🌱 Traga seu copo para o ${this.evento.nome}! 💚`)
			.comTexto(
				"Pedimos que todos tragam seus copos reutilizáveis, pois não teremos copos descartáveis no evento."
			)
			.comTexto(
				"Assim, ajudamos a reduzir o uso de plástico e deixamos nosso evento ainda mais sustentável."
			)
			.comTexto(
				"E quem trouxer o seu copo ainda vai ganhar um brinde especial."
			)
			.comTexto("Contamos com vocês!")
			.comInscricaoELocal()
			.comHashtags()
			.gerar();
	}
}
