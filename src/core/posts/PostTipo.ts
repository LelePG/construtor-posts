import PostFactory from "./PostFactory";
import Evento from "../evento/Evento";
export default class PostTipo {
	private factory: PostFactory;
	private readonly evento: Evento;

	constructor(evento: Evento) {
		this.factory = new PostFactory(evento);
		this.evento = evento;
	}

	static listarTiposDePost(): string[] {
		return Object.getOwnPropertyNames(PostTipo.prototype).filter(
			(method) => method !== "constructor"
		);
	}

	static obterParametrosDoMetodo(metodo: string): string[] {
		const parametros = Function.prototype.toString();
		return [parametros];
	}

	faltamDias({ diasFaltantes }: { diasFaltantes: number }): string {
		const dataEvento = new Date(`${this.evento.data}`);
		const dataPostagem = new Date(
			dataEvento.getTime() - diasFaltantes * 24 * 60 * 60 * 1000
		);
		const dataFormatada = new Intl.DateTimeFormat("pt-BR").format(dataPostagem);
		return this.factory
			.comDivisorInicio()
			.comTituloOrganizacao(`Faltam ${diasFaltantes} dias`)
			.comTexto(`Data da postagem: ${dataFormatada}`)
			.comDivisorIntermediario()
			.comTexto(
				`⏳ Faltam ${String(diasFaltantes).padStart(2, "0")} dias para o ${
					this.evento.nome
				}`
			)
			.comTexto(
				`O ${this.evento.nome} está chegando e ainda dá tempo de garantir o seu ingresso.`
			)
			.comInscricaoELocal()
			.comFinalizacao()
			.gerar();
	}

	eHoje(): string {
		const dataPostagem = new Date(`${this.evento.data}/2024`);
		const dataFormatada = new Intl.DateTimeFormat("pt-BR").format(dataPostagem);
		return this.factory
			.comDivisorInicio()
			.comTituloOrganizacao(`É hoje!`)
			.comTexto(`Data da postagem: ${dataFormatada}`)
			.comDivisorIntermediario()
			.comTexto(`🎉 O ${this.evento.nome} é hoje!`)
			.comTexto(
				`Esperamos todo mundo logo mais no ${this.evento.local} às ${this.evento.hora}.`
			)
			.comFinalizacao()
			.gerar();
	}

	eAmanha(): string {
		const dataEvento = new Date(`${this.evento.data}/2024`);
		const dataPostagem = new Date(
			dataEvento.getTime() - 1 * 24 * 60 * 60 * 1000
		);
		const dataFormatada = new Intl.DateTimeFormat("pt-BR").format(dataPostagem);
		return this.factory
			.comDivisorInicio()
			.comTituloOrganizacao(`É amanhã`)
			.comTexto(`Data da postagem: ${dataFormatada}`)
			.comDivisorIntermediario()
			.comTexto(`🎉 É amanhã!`)
			.comTexto(
				`O ${this.evento.nome} está chegando! Amanhã, dia ${this.evento.data}, te esperamos no ${this.evento.local} às ${this.evento.hora}.`
			)
			.comFinalizacao()
			.gerar();
	}

	comoChegar(): string {
		return this.factory
			.comCabecalhoOrganizacao("Como Chegar")
			.comTexto(`⏳ O ${this.evento.nome} está chegando!`)
			.comTexto(
				`O ${this.evento.nome} acontecerá dia ${this.evento.data} no ${this.evento.local}.`
			)
			.comTexto(
				`O credenciamento começa às ${this.evento.hora} e recomendamos que você se planeje para chegar ao local do evento com antecedência para evitar transtornos.`
			)
			.comTexto(
				"Tem alguma dúvida de como chegar ao local do evento? Dá uma olhadinha no nosso guia!"
			)
			.comFinalizacao()
			.gerar();
	}

	horasComplementares(): string {
		return this.factory
			.comCabecalhoOrganizacao("Horas complementares")
			.comTexto("📣 Precisando de horas complementares para a faculdade?")
			.comTexto(
				`O ${this.evento.nome} terá certificado de participação com a carga horária correspondente ao evento. Se você está precisando de horas complementares, não perca essa oportunidade!`
			)
			.comTexto(`Te esperamos no ${this.evento.nome}!`)
			.comInscricaoELocal()
			.comFinalizacao()
			.gerar();
	}

	guiaPreparacao(): string {
		return this.factory
			.comCabecalhoOrganizacao("Guia de Preparação")
			.comTexto(`⏳ O ${this.evento.nome} está chegando!`)
			.comTexto(
				"Não esquece de conferir o nosso guia de preparação com algumas informações importantes!"
			)
			.comFinalizacao()
			.gerar();
	}

	programacao(): string {
		return this.factory
			.comCabecalhoOrganizacao("Programação")
			.comTexto(`🕖 Olha a programação do ${this.evento.nome} na sua timeline!`)
			.comTexto(
				`O ${this.evento.nome} está chegando e a programação já está disponível! Confira as palestras incríveis que vão rolar nesse evento.`
			)
			.comInscricaoELocal()
			.comFinalizacao()
			.gerar();
	}

	ingressosEsgotados(): string {
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

	naoEsquecaAlimento(): string {
		return this.factory
			.comCabecalhoOrganizacao("Não esqueça seu alimento")
			.comTexto(
				"🍽️ Se você optou pelo ingresso + alimento, não esqueça de levar 1kg de alimento não perecível para o evento 🍽️"
			)
			.comTexto(
				"Lembramos que a entrada de quem comprou este tipo de ingresso só será permitida para aqueles que apresentarem o alimento na entrada. Contamos com a sua colaboração!"
			)
			.comInscricaoELocal()
			.comFinalizacao()
			.gerar();
	}

	saveTheDate(): string {
		return this.factory
			.comCabecalhoOrganizacao("Save the Date")
			.comTexto("📅 Anote na agenda!")
			.comTexto(`No dia ${this.evento.data} acontecerá o ${this.evento.nome}.`)
			.comTexto("Fique de olho nas nossas redes para mais informações.")
			.comFinalizacao()
			.gerar();
	}

	c4p(): string {
		return this.factory
			.comCabecalhoOrganizacao("Call for Papers")
			.comTexto(
				"🎤 Que tal compartilhar seus conhecimentos sobre tecnologia com a comunidade?"
			)
			.comTexto(
				`O call for papers para o ${this.evento.nome} que acontecerá dia ${this.evento.data} em Pelotas está aberto, e essa é a sua oportunidade de compartilhar seus conhecimentos sobre tecnologia com a comunidade. Não deixe de submeter a sua palestra, e qualquer dúvida, manda uma mensagem pra gente!`
			)
			.comInscricaoELocal()
			.comFinalizacao()
			.gerar();
	}

	loteComCamiseta(): string {
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

	tragaSeuLixo(): string {
		return this.factory
			.comCabecalhoOrganizacao("Ponto de Coleta de Lixo Tecnológico")
			.comTexto(
				"🗑️ Ponto de Coleta de Lixo Tecnológico no DevFest Rio Grande do Sul 2024!"
			)
			.comTexto(
				"Você tem algum eletrônico que não usa mais? Que tal trazê-lo para descarte no ponto de coleta do Pelotas Parque Tecnológico? Você ajuda o meio ambiente e ainda libera um espacinho a mais na sua casa!"
			)
			.comInscricaoELocal()
			.comFinalizacao()
			.gerar();
	}

	patrocinador(patrocinador: string): string {
		return this.factory
			.comCabecalhoOrganizacao(`Patrocinador ${patrocinador.trim()}`)
			.comTexto(
				`🤝 O ${patrocinador.trim()} é um patrocinador oficial do ${
					this.evento.nome
				}!`
			)
			.comTexto(
				`Agradecemos demais por possibilitar que o ${this.evento.nome} seja possível!`
			)
			.comFinalizacao()
			.gerar();
	}

	palestrante(
		nome: string,
		titulo: string,
		resumo: string,
		miniBio: string
	): string {
		return this.factory
			.comCabecalhoOrganizacao(`Palestrante ${nome}`)
			.comTexto(`📣 Palestra Confirmada ${this.evento.nome}!`)
			.comTexto(`⭐ ${titulo}`)
			.comTexto(`🎤 ${nome}`)
			.comTexto("📘 Descrição da palestra:")
			.comTexto(resumo)
			.comTexto("📘 Bio do palestrante:")
			.comTexto(miniBio)
			.comInscricaoELocal()
			.comFinalizacao()
			.gerar();
	}

	naoEsquecaCopo(): string {
		return this.factory
			.comCabecalhoOrganizacao("Não esqueça seu copo")
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
			.comFinalizacao()
			.gerar();
	}
}
