// se não falar que é public, se torna public automaticamente.
// private.
export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  addColaborador(colab: Colaborador): void {
    this.colaboradores.push(colab);
  }
}

//esse é o shorthand
//aqui precida dizer se é public ou não
export class Colaborador {
  constructor(public readonly name: string, public readonly sobrenome: string) {}
}

const empresa1 = new Empresa('GM', '11.111.111/0001-11');
const colaborador1 = new Colaborador('dfgfg', 'adfg');
empresa1.addColaborador(colaborador1);
console.log(empresa1);
