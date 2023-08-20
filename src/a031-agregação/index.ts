export class CarinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeDeProdutos(): number {
    return this.produtos.length;
  }
  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
}
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('dsafadf', 79);
const produto2 = new Produto('dsafadf', 21);

// console.log(produto1);

const carrinho = new CarinhoDeCompras();
carrinho.inserirProdutos(produto1);
carrinho.inserirProdutos(produto2);
console.log(carrinho.valorTotal());
console.log(carrinho.quantidadeDeProdutos());
