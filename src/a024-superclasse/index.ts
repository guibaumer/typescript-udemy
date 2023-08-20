export class Pessoa {


  //essa é superclasse


  public nome: string;
  public sobrenome: string;
  public idade: number;
  protected cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }
  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  //essa é subclasse
  //polimorfismo aqui

  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log(this.nome + '.' + this.sobrenome);
    return super.getNomeCompleto();
  }
}

const pessoa = new Pessoa('carlos', 'silva', 54, '787--70890-');
const aluno = new Aluno('jose', 'silva', 54, '787--70890-');
console.log(aluno.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
