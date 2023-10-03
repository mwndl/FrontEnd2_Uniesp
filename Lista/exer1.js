/* Questão 1:  

Supondo que a população de um país A seja da ordem de 80000 habitantes com 
uma taxa anual de crescimento de 3% e que a população de B seja 200000 
habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que 
calcule e escreva o número de anos necessários para que a população do país A 
ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

*/

let pop_A = 80000;
let pop_B = 200000;
let taxa_crescimento_A = 0.03;
let taxa_crescimento_B = 0.015;
let anos = 0;

while (pop_A < pop_B) {
    pop_A += pop_A * taxa_crescimento_A;
    pop_B += pop_B * taxa_crescimento_B;
    anos++;
}

console.log("Período necessário: " + anos + " anos.");