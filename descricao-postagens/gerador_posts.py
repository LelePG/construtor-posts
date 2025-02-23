from Post import PostFactory
import os
from dotenv import load_dotenv

load_dotenv()

def exibir_menu():
    print("Selecione o tipo de postagem que deseja gerar:")
    print("1. Faltam X dias")
    print("2. Patrocinadores")
    print("3. Palestrantes")
    print("4. Como Chegar")
    print("5. Horas Complementares")
    print("6. Guia de Preparação")
    print("7. Programação")
    print("8. É hoje")
    print("9. É amanhã")
    print("10. Ingressos Esgotados")
    print("11. Não esqueça seu copo")
    print("12. Não esqueça seu alimento")
    print("13. Save the Date")
    print("14. Call for Papers")
    print("15. 1º Lote com Camiseta")
    print("16. Traga seu lixo")
    print("0. Sair")

def executar_opcao(geradorPost, opcao):
    if opcao == "1": # Faltam X dias
        dias = input("Digite os dias separados por vírgula: ")
        lista_dias = dias.split(',')
        for dia in lista_dias:
            geradorPost.deFaltamDias(dia).salvar()
    elif opcao == "2": # Patrocinadores
        patrocinadores = input("Digite os patrocinadores separados por vírgula: ")
        for p in patrocinadores.split(','):
            geradorPost.dePatrocinador(p).salvar()
    elif opcao == "3": # Palestrantes
        arquivo_csv = input("Digite o nome do arquivo csv: ")
        with open(arquivo_csv) as csvfile:
            leitor_csv = csv.DictReader(csvfile)
            for linha in leitor_csv:
                geradorPost.dePalestrante(linha["nome"], linha["titulo"], linha["resumo"], linha["mini-bio"]).salvar()
    elif opcao == "4": # Como Chegar
        geradorPost.deComoChegar().salvar()
    elif opcao == "5": # Horas Complementares
        geradorPost.deHorasComplementares().salvar()
    elif opcao == "6": # Guia de Preparação
        geradorPost.deGuiaPreparacao().salvar()
    elif opcao == "7": # Programação
        geradorPost.deProgramacao().salvar()
    elif opcao == "8": # É hoje
        geradorPost.deEHoje().salvar()
    elif opcao == "9": # É amanhã
        geradorPost.deEAmanha().salvar()
    elif opcao == "10": # Ingressos Esgotados
        geradorPost.deIngressosEsgotados().salvar()
    elif opcao == "11": # Não esqueça seu copo
        geradorPost.deNaoEsquecaCopo().salvar()
    elif opcao == "12": # Não esqueça seu alimento
        geradorPost.deNaoEsquecaAlimento().salvar()
    elif opcao == "13": # Save the Date
        geradorPost.deSaveTheDate().salvar()
    elif opcao == "14": # Call for Papers
        geradorPost.deC4p().salvar()
    elif opcao == "15": # 1º Lote com Camiseta
        geradorPost.de1loteComCamiseta().salvar()
    elif opcao == "16": # Traga seu lixo
        geradorPost.deTragaSeuLixo().salvar()
    else:
        print("Opção inválida.")
        
print(os.getenv("EVENTO"))

geradorPost = PostFactory(
        evento = os.getenv('EVENTO'),
        link_inscricao = os.getenv('LINK_INSCRICAO'),
        local = os.getenv('LOCAL'),
        data = os.getenv('DATA'),
        hora = os.getenv('HORA'),
        hashtags = os.getenv('HASHTAGS'),
        caminho_output= "./output"
)

while True:
    exibir_menu()
    opcao = input("Digite o número da opção desejada: ")
    if opcao == "0":
        break
    executar_opcao(geradorPost, opcao)