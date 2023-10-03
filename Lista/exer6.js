/* Questão 6:

Escreva uma função que informe o retorno de um investimento (montante) com 
base nos valores do capital inicial, tempo em meses e taxa de juros mensal, 
fornecidos pelo usuário.

        Use a fórmula: M = C * (1+i)t

    Onde:
        ▪ C = Capital inicial investido
        ▪ i = Taxa de juros, em percentual
        ▪ t = Tempo do investimento, em meses
        Exiba o resultado com duas casas decimais.

*/

function calcularRendimentoInvestimento(investimentoInicial, periodo, taxaMensal) {
    taxaMensal /= 100; 
    let montanteFinal = investimentoInicial * Math.pow((1 + taxaMensal), periodo);

    return montanteFinal;
}

let investimentoInicial = prompt("Digite o investimento inicial:");
let periodo = prompt("Digite o período do investimento em meses:");
let taxaMensal = prompt("Digite a taxa de juros mensal em percentual:");

let rendimento = calcularRendimentoInvestimento(investimentoInicial, periodo, taxaMensal);

console.log("O rendimento do investimento é: R$" + rendimento.toFixed(2));