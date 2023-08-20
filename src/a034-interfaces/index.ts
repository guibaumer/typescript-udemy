interface TipoSobrenome {
  sobrenome: string;
}
interface TipoNome {
  nome: string;
}
interface TipoNomeCompleto {
  nomeCompleto: () => string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoNomeCompleto, TipoSobrenome {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('gui', 'baumer');
console.log(pessoa.nomeCompleto());
