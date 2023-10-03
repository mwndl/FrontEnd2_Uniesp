/* Questão 5:

Escreva uma função que encontre a área e o perímetro de um círculo, de acordo 
com o raio fornecido.

*/

function calcularAreaEPerimetroDoCirculo(raio) {
    const PI = 3.14159;
    let areaDoCirculo = PI * raio * raio;
    let perimetroDoCirculo = 2 * PI * raio;

    return {
        area: areaDoCirculo,
        perimetro: perimetroDoCirculo
    };
}

let raioDoCirculo = prompt("Digite o raio do círculo:");
let resultadoCirculo = calcularAreaEPerimetroDoCirculo(raioDoCirculo);

console.log("A área do círculo é: " + resultadoCirculo.area.toFixed(2));
console.log("O perímetro do círculo é: " + resultadoCirculo.perimetro.toFixed(2));
