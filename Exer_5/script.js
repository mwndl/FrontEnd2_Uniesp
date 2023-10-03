function adicionarNumeros() {
  let total = 0;
  let numero = null;

  for (let i = 0; i < 5; i++) {
    numero = prompt(`Por favor, insira o ${i + 1}º número:`);
    if (numero !== null) {
      total += Number(numero);
    }
  }

  alert(`A soma dos números é: ${total}`);
}

adicionarNumeros();
