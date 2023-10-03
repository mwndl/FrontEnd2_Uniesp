/* Questão 3:

Faça um programa que, dado um conjunto de N números, determine o menor valor, 
o maior valor e a soma dos valores.

*/

let valores = [];
let total = 0;

for (let i = 0; i < N; i++) {
    let valor = prompt("Digite um número:");
    valores.push(valor);
    total += valor;
}

let menorValor = Math.min(...valores);
let maiorValor = Math.max(...valores);

console.log("Menor valor: " + menorValor);
console.log("Maior valor: " + maiorValor);
console.log("Soma dos valores: " + total);