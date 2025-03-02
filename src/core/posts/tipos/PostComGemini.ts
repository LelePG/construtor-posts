import PostBase from "../PostBase";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default class PostGemini extends PostBase {
	static obterParametros() {
		return [
			{ texto: "Chave de API", nome: "chaveApi", tipo: "string" },
			{
				texto: "Descreva a postagem",
				nome: "prompt",
				tipo: "string",
			},
		];
	}

	gerar({
		chaveApi,
		prompt,
	}: {
		chaveApi: string;
		prompt: string;
	}): string | Promise<string> {
		const genAI = new GoogleGenerativeAI(chaveApi);
		const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

		const promptCompleto = `Escreva um post para redes sociais usando um tom amigável usando um tom amigável. Não use hashtags e considere que o post vai ser usado para divulgar o ${this.evento.nome} que acontece em ${this.evento.data} em ${this.evento.local}. O post deve ser gerado a partir do seguinte prompt: ${prompt}
        `;

		return model.generateContent(promptCompleto).then((result) => {
			return this.factory
				.comTexto(result.response.text().trim())
				.comHashtags()
				.gerar();
		});
	}
}
