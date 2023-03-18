function CalcularAreaTriangulo() {
  const base = parseFloat(prompt("Digite a base do triangulo: "));
  const altura = parseFloat(prompt("Digite a altura do triangulo: "));
  return (base * altura) / 2;
}

function CalcularAreaRetangulo() {
  const base = parseFloat(prompt("Digite a area do retangulo: "));
  const altura = parseFloat(prompt("Digite a altura do retangulo: "));
  return base * altura;
}

function CalcularAreaDoQuadrado() {
  const lado = parseFloat(prompt("Digite a area do quadrado: "));
  return lado * lado;
}

function CalcularAreaDoTrapezio() {
  const baseMaior = parseFloat(prompt("Digite a base maior do trapézio: "));
  const baseMenor = parseFloat(prompt("Digite a base menor do trapézio: "));
  const altura = parseFloat(prompt("Digite a altura do trapézio: "));
  return (baseMaior * baseMenor * altura) / 2;
}

function CalcularAreaDoCirculo() {
  const pi = 3.14;
  const raio = parseFloat(prompt("Digite o tamanho do raio do círculo: "));
  return pi * (raio * raio);
}

function exibirMenu() {
  return prompt(
    "Escolha uma opção:\n" +
      "1. Calcular área do tringulo:\n" +
      "2. Calcular área do retângulo:\n" +
      "3. Calcular a área do quadrado:\n" +
      "4. Calcular a área do trapézio:\n" +
      "5. Calcular a área do circulo:\n" +
      "6. Sair da aplicação: "
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = CalcularAreaTriangulo();
        break;
      case "2":
        resultado = CalcularAreaRetangulo();
        break;
      case "3":
        resultado = CalcularAreaDoQuadrado();
        break;
      case "4":
        resultado = CalcularAreaDoTrapezio();
        break;
      case "5":
        resultado = CalcularAreaDoCirculo();
        break;
      case "6":
        alert("Saindooooooo");
        break;
      default:
        alert("Opção inválida!");
        break;
    }
    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}
executar();
