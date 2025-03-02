import PostBase from "../PostBase";

export default class EHoje extends PostBase {
	gerar(): string {
		return this.factory
			.comTexto("🎉 É amanhã! ")
			.comTexto(
				`Esperamos todo mundo logo mais no ${this.evento.local} às ${this.evento.hora}.`
			)
			.comHashtags()
			.gerar();
	}
}
