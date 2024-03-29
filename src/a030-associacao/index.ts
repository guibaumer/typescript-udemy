export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }
  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }
  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }
  escrever(): void {
    if (this.ferramenta === null) {
      console.log('sem ferramenta');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;
  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}

export class Maquina extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}

const escritor = new Escritor('luiz');
const caneta = new Caneta('bic');
const maquina = new Maquina('mde');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquina.nome);

escritor.ferramenta = caneta;
escritor.escrever();
