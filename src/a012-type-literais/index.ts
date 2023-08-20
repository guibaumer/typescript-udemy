let x = 10;
x = 42323;
const y = 10;
let a = 100 as const;

const person = {
  nome: 'luiz' as const,
};


function escolhaCor(cor: 'Vermelho' | 'Amarelo') {
  return cor;
}
console.log(escolhaCor('Amarelo'));
//module mode
export default 1;
