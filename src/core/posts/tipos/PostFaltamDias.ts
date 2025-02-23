import PostBase from "../PostBase";

export default class PostFaltamDias extends PostBase {
	static obterParametros(): {
		nome: string;
		tipo: string;
		label: string;
	}[] {
		return [{ nome: "Dias Faltantes", label: "diasFaltantes", tipo: "number" }];
	}

	gerar({ diasFaltantes }: { diasFaltantes: number }): string {
		const dataEvento = this.evento.datetime;
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
}
