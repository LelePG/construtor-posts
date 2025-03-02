import PostBase from "../PostBase";

export default class PostIngressosEsgotados extends PostBase {
	gerar(): string {
		return this.factory
			.comTexto(
				"🍽️ Se você optou pelo ingresso + alimento, não esqueça de levar 1kg de alimento não perecível para o evento 🍽️"
			)
			.comTexto(
				"Lembramos que a entrada de quem comprou este tipo de ingresso só será permitida para aqueles que apresentarem o alimento na entrada. Contamos com a sua colaboração!"
			)
			.comInscricaoELocal()
			.comHashtags()
			.gerar();
	}
}
