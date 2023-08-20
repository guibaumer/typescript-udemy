let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

console.log(createPerson('john'));
/////////////////////////////////////////////////////

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
const squareOf2 = squareOf(2);
const squareOf2String = squareOf('2');

if (squareOf2 === null) {
  console.log('invalido');
} else {
  console.log(squareOf2);
}
