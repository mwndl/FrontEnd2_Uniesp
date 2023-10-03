/* Questão 4:

Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
    a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
    b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
    c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao 
        dobro do percentual do ano anterior. Faça um programa que determine o 
        salário atual desse funcionário. Após concluir isto, altere o programa 
        permitindo que o usuário digite o salário inicial do funcionário

*/

let salarioBase = 1000; 
let taxaAumento = 0.015;

for (let ano = 1997; ano <= new Date().getFullYear(); ano++) {
    taxaAumento *= 2; 
    salarioBase += salarioBase * taxaAumento;
}

console.log("O salário atual do funcionário é: R$" + salarioBase.toFixed(2));