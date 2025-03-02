import PostBase from "../PostBase";

export default class PostPalestrante extends PostBase {
	static obterParametros() {
		return [
			{ texto: "Nome Palestrante:", nome: "nomePalestrante", tipo: "string" },
			{ texto: "Título Palestra:", nome: "tituloPalestra", tipo: "string" },
			{ texto: "Resumo Palestra:", nome: "resumoPalestra", tipo: "string" },
			{
				texto: "Mini-bio Palestrante:",
				nome: "miniBioPalestrante",
				tipo: "string",
			},
		];
	}

	gerar({
		nomePalestrante,
		tituloPalestra,
		resumoPalestra,
		miniBioPalestrante,
	}: {
		nomePalestrante: string;
		tituloPalestra: string;
		resumoPalestra: string;
		miniBioPalestrante: string;
	}): string {
		return this.factory
			.comCabecalhoOrganizacao(`Palestrante ${nomePalestrante}`)
			.comTexto(`📣 Palestra Confirmada ${this.evento.nome}!`)
			.comTexto(`⭐ ${tituloPalestra}`)
			.comTexto(`🎤 ${nomePalestrante}`)
			.comTexto("📘 Descrição da palestra:")
			.comTexto(resumoPalestra)
			.comTexto("📘 Bio do palestrante:")
			.comTexto(miniBioPalestrante)
			.comInscricaoELocal()
			.comFinalizacao()
			.gerar();
	}
}
