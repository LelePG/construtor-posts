import PostBase from "../PostBase";

export default class PostSaveTheDate extends PostBase {
	gerar(): string {
		return this.factory
			.comCabecalhoOrganizacao("Save the Date")
			.comTexto("📅 Anote na agenda!")
			.comTexto(`No dia ${this.evento.data} acontecerá o ${this.evento.nome}.`)
			.comTexto("Fique de olho nas nossas redes para mais informações.")
			.comFinalizacao()
			.gerar();
	}
}
