export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }
  parar(): void {
    this.motor.parar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
}

export class Motor {
  ligar(): void {
    console.log('motor está ligado');
  }
  parar(): void {
    console.log('motor está parando');
  }
  acelerar(): void {
    console.log('motor está acelerendo');
  }
}
const carro1 = new Carro();
carro1.ligar();
