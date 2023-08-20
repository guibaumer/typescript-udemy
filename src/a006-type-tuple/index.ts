//array de tamanho fixo
const dadosCliente: readonly [number, string, string?] = [1, 'Luiz'];
const dadosCliente2: [number, string, ...string[]] = [1, 'Luiz'];

const array: readonly string[] = ['a', 'b'];
const array2: ReadonlyArray<string> = ['a', 'b'];

dadosCliente[0] = 100;
console.log(dadosCliente);
