export class Pessoa {
    static idadePadrao = 0;
    static cpfPadrao = '000';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
) {}

  static falaOi(): void {
    console.log('oi');
  }

  static CriaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

}

const pessoa = new Pessoa('carlos', 'silva', 54, '000.000.000-00');
const pessoa2 = Pessoa.CriaPessoa('pessoa', 'sobrenomee');

console.log(pessoa2);
pessoa.cpf = '123.456.789-00';
console.log(pessoa);
Pessoa.falaOi();
