// import PostFactory from "./PostFactory";
// import * as dotenv from "dotenv";
// import * as fs from "fs";
// import * as readline from "readline";

// dotenv.config();

// function exibirMenu(): void {
// 	console.log("Selecione o tipo de postagem que deseja gerar:");
// 	console.log("1. Faltam X dias");
// 	console.log("2. Patrocinadores");
// 	console.log("3. Palestrantes");
// 	console.log("4. Como Chegar");
// 	console.log("5. Horas Complementares");
// 	console.log("6. Guia de Preparação");
// 	console.log("7. Programação");
// 	console.log("8. É hoje");
// 	console.log("9. É amanhã");
// 	console.log("10. Ingressos Esgotados");
// 	console.log("11. Não esqueça seu copo");
// 	console.log("12. Não esqueça seu alimento");
// 	console.log("13. Save the Date");
// 	console.log("14. Call for Papers");
// 	console.log("15. 1º Lote com Camiseta");
// 	console.log("16. Traga seu lixo");
// 	console.log("0. Sair");
// }

// async function executarOpcao(
// 	geradorPost: PostFactory,
// 	opcao: string
// ): Promise<void> {
// 	const rl = readline.createInterface({
// 		input: process.stdin,
// 		output: process.stdout,
// 	});

// 	const question = (query: string): Promise<string> => {
// 		return new Promise((resolve) => rl.question(query, resolve));
// 	};

// 	if (opcao === "1") {
// 		// Faltam X dias
// 		const dias = await question("Digite os dias separados por vírgula: ");
// 		const listaDias = dias.split(",");
// 		for (const dia of listaDias) {
// 			geradorPost.deFaltamDias(parseInt(dia)).salvar();
// 		}
// 	} else if (opcao === "2") {
// 		// Patrocinadores
// 		const patrocinadores = await question(
// 			"Digite os patrocinadores separados por vírgula: "
// 		);
// 		for (const p of patrocinadores.split(",")) {
// 			geradorPost.dePatrocinador(p).salvar();
// 		}
// 	} else if (opcao === "3") {
// 		// Palestrantes
// 		const arquivoCsv = await question("Digite o nome do arquivo csv: ");
// 		const csvData = fs.readFileSync(arquivoCsv, "utf8");
// 		const linhas = csvData.split("\n");
// 		const headers = linhas[0].split(",");
// 		for (const linha of linhas.slice(1)) {
// 			const valores = linha.split(",");
// 			const palestrante = headers.reduce((obj: any, header, index) => {
// 				obj[header] = valores[index];
// 				return obj;
// 			}, {});
// 			geradorPost
// 				.dePalestrante(
// 					palestrante["nome"],
// 					palestrante["titulo"],
// 					palestrante["resumo"],
// 					palestrante["mini-bio"]
// 				)
// 				.salvar();
// 		}
// 	} else if (opcao === "4") {
// 		// Como Chegar
// 		geradorPost.deComoChegar().salvar();
// 	} else if (opcao === "5") {
// 		// Horas Complementares
// 		geradorPost.deHorasComplementares().salvar();
// 	} else if (opcao === "6") {
// 		// Guia de Preparação
// 		geradorPost.deGuiaPreparacao().salvar();
// 	} else if (opcao === "7") {
// 		// Programação
// 		geradorPost.deProgramacao().salvar();
// 	} else if (opcao === "8") {
// 		// É hoje
// 		geradorPost.deEHoje().salvar();
// 	} else if (opcao === "9") {
// 		// É amanhã
// 		geradorPost.deEAmanha().salvar();
// 	} else if (opcao === "10") {
// 		// Ingressos Esgotados
// 		geradorPost.deIngressosEsgotados().salvar();
// 	} else if (opcao === "11") {
// 		// Não esqueça seu copo
// 		geradorPost.deNaoEsquecaCopo().salvar();
// 	} else if (opcao === "12") {
// 		// Não esqueça seu alimento
// 		geradorPost.deNaoEsquecaAlimento().salvar();
// 	} else if (opcao === "13") {
// 		// Save the Date
// 		geradorPost.deSaveTheDate().salvar();
// 	} else if (opcao === "14") {
// 		// Call for Papers
// 		geradorPost.deC4p().salvar();
// 	} else if (opcao === "15") {
// 		// 1º Lote com Camiseta
// 		geradorPost.de1loteComCamiseta().salvar();
// 	} else if (opcao === "16") {
// 		// Traga seu lixo
// 		geradorPost.deTragaSeuLixo().salvar();
// 	} else {
// 		console.log("Opção inválida.");
// 	}

// 	rl.close();
// }

// const evento = process.env.EVENTO;

// const geradorPost = new PostFactory(
// 	evento,
// 	process.env.LINK_INSCRICAO,
// 	process.env.LOCAL,
// 	process.env.DATA,
// 	process.env.HORA,
// 	process.env.HASHTAGS,
// 	"./output"
// );

// (async () => {
// 	while (true) {
// 		exibirMenu();
// 		const opcao = await new Promise<string>((resolve) => {
// 			const rl = readline.createInterface({
// 				input: process.stdin,
// 				output: process.stdout,
// 			});
// 			rl.question("Digite o número da opção desejada: ", (answer) => {
// 				rl.close();
// 				resolve(answer);
// 			});
// 		});
// 		if (opcao === "0") {
// 			break;
// 		}
// 		await executarOpcao(geradorPost, opcao);
// 	}
// })();
