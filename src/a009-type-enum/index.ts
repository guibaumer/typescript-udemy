enum Cores {
  VERMELHO = 10, //10
  AZUL, //1
  AMARELO, //2
}
console.log(Cores.VERMELHO);
console.log(Cores[0]);



function escolhaCores(cor: Cores): void {
  console.log(Cores[cor]);
}
escolhaCores(Cores.AZUL);
