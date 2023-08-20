let nome: string = 'luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;


//array
let numberArray: Array<number> = [1, 2, 3];
let stringArray: Array<string> = ['fdgsfe', 'hiuga'];

//objetos
const pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'guigui',
};

//funções
function soma(x: number, y: number) {
    return x + y;
}
const result = soma(2, 2);

const soma2: (x: number, y: number) => number = (x, y) => x + y;
