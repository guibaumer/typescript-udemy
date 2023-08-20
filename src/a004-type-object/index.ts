const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor a',
  chaveB: 'valor b',
};

objetoA.chaveA = 'outro valor';
