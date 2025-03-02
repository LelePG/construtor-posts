import Evento from "../evento/Evento";

class PostFactory {
	private LINK_INSCRICAO: string;
	private LOCAL: string;
	private DATA: string;
	private HORA: string;
	private HASHTAGS: string;
	private texto: string;

	constructor(evento: Evento) {
		this.LINK_INSCRICAO = evento.linkInscricao;
		this.LOCAL = evento.local;
		this.DATA = evento.data;
		this.HORA = evento.hora;
		this.HASHTAGS = evento.hashtags;
		this.texto = "";
	}

	comHashtags(): PostFactory {
		this.texto += this.HASHTAGS + "\n";
		return this;
	}

	// comDivisorInicio(): PostFactory {
	// 	this.texto = `${"=".repeat(50)}\n${this.texto}`;
	// 	return this;
	// }

	// comDivisorFim(): PostFactory {
	// 	this.texto += `${"=".repeat(50)}\n\n`;
	// 	return this;
	// }

	// comDivisorIntermediario(): PostFactory {
	// 	this.texto += `${"=".repeat(50)}\n`;
	// 	return this;
	// }

	// comTituloOrganizacao(titulo: string): PostFactory {
	// 	this.texto += `Titulo da postagem: ${titulo}\n`;
	// 	return this;
	// }

	comTexto(texto: string): PostFactory {
		this.texto += `${texto}\n\n`;
		return this;
	}

	comLocal(): PostFactory {
		this.texto += `📍 Local: ${this.LOCAL}\n\n`;
		return this;
	}

	comDataHora(): PostFactory {
		this.texto += `📅 ${this.DATA} - ${this.HORA}\n\n`;
		return this;
	}

	comLinkInscricao(): PostFactory {
		this.texto += `🔗 Inscrições: ${this.LINK_INSCRICAO}\n\n`;
		return this;
	}

	// comCabecalhoOrganizacao(titulo: string): PostFactory {
	// 	return this.comDivisorInicio()
	// 		.comTituloOrganizacao(titulo)
	// 		.comDivisorIntermediario();
	// }

	comInscricaoELocal(): PostFactory {
		return this.comLinkInscricao().comDataHora().comLocal();
	}

	mostrar(): void {
		console.log(this.texto);
	}

	gerar(): string {
		return this.texto;
	}
}

export default PostFactory;
