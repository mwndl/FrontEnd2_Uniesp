/* Questão 2:

Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de 
números pares e a quantidade de números ímpares.

*/

let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    let num = prompt("Digite um número inteiro:");
    if (num % 2 == 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Números pares: " + pares);
console.log("Números ímpares: " + impares);