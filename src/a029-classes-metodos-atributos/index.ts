//so pode ser instancionada por classes filhas
export abstract class Personagem {
  protected abstract emoji: string;

  constructor(protected nome: string, protected ataque: number, protected vida: number) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(this.nome + ' está atacando');
    personagem.perderVida(this.ataque);
  }
  perderVida(forca: number): void {
    this.vida -= forca;
    console.log(`${this.nome} agora tem ${this.vida} de vida.`);
  }
  abstract bordao(): void;
}

class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + ' GUERREIRA ATACANDO!');
  }
}
class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + ' MONSTRO ATACANDO!');
  }
}

const guerreira = new Guerreira('guerreira', 100, 1000);
const monstro = new Monstro('monstro', 97, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
