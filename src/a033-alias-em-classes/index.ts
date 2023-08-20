/* o que está mais abaixo ou isso aqui:

type TipoPessoa = {
    nome: string;
    sobrenome: string;
    nomeCompleto: () => string;
  };

*/

type TipoSobrenome = {
  sobrenome: string;
};
type TipoNome = {
  nome: string;
};
type TipoNomeCompleto = {
  nomeCompleto: () => string;
};
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('gui', 'baumer');
console.log(pessoa.nomeCompleto());
