import PostBase from "../PostBase";

export default class PostPalestrante extends PostBase {
	static obterParametros() {
		return [
			{ nome: "Nome Palestrante", label: "nomePalestrante", tipo: "string" },
			{ nome: "Título Palestra", label: "tituloPalestra", tipo: "string" },
			{ nome: "Resumo Palestra", label: "resumoPalestra", tipo: "string" },
			{
				nome: "Mini-bio Palestrante",
				label: "miniBioPalestrante",
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
