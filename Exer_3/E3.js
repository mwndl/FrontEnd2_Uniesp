// Entrada dos dados da altura e gênero de 15 pessoas
const alturas = [];
const generos = [];

for (let i = 0; i < 15; i++) {
  console.clear();
  const altura = parseFloat(prompt("Insira a altura da pessoa " + (i + 1) + ": "));
  const genero = prompt("Insira o gênero da pessoa " + (i + 1) + " (H ou M): ");
  alturas.push(altura);
  generos.push(genero);
}

// A maior e a menor altura do grupo
const maiorAltura = Math.max(...alturas);
const menorAltura = Math.min(...alturas);

// Média de altura dos homens
let somaAlturaHomens = 0;
let numeroHomens = 0;
for (let i = 0; i < 15; i++) {
  if (generos[i] === "H") {
    somaAlturaHomens += alturas[i];
    numeroHomens++;
  }
}
const mediaAlturaHomens = somaAlturaHomens / numeroHomens;

// Descobrir qual o num. de mulheres (retira o total de homens das 15 buscas)
const numeroMulheres = 15 - numeroHomens;

// Print dos resultados
alert("A maior altura do grupo é " + maiorAltura + ".");
alert("A menor altura do grupo é " + menorAltura + ".");
alert("A média de altura dos homens é " + mediaAlturaHomens + ".");
alert("O número de mulheres é " + numeroMulheres + ".");