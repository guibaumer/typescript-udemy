function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'luiz',
  sobrenome: 'otavio',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('li', 'hfd');
pessoa.exibirNome();
export { pessoa };
