export class Pessoa {
  constructor(private nome: string, public sobrenome: string, private idade: number, protected _cpf: string) {}
  getNome(): string {
    return this.nome;
  }
  getIdade(): number {
    return this.idade;
  }
  set cpf(valor: string) {
    this._cpf = valor;
  }
  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('carlos', 'silva', 54, '000.000.000-00');

pessoa.cpf = '123.456.789-00';

console.log(pessoa.cpf);

// console.log(pessoa.getCpf());
