// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatena(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}


const result = multiplicaArgs(1, 2, 4);
const conc = concatena('fhado', 'fhadsui');
console.log(result);
console.log(conc);

