type Idade = number;
type CorRGB = 'vermelho' | 'verde' | 'azul';
type CorCM = 'ciano' | 'magenta';
type CorPreferida = CorRGB | CorCM;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

const pessoa1: Pessoa = {
  nome: 'luiz',
  idade: 30,
  salario: 200_000, //200000
  corPreferida: 'azul',
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor }; //shallow copy
}
console.log(setCorPreferida(pessoa1, 'vermelho'));
