class Recinto {
  constructor() {
    this.recintos = [
      { numero: 1, bioma: "savana", tamanho: 10, animais: { macaco: 3 } },
      { numero: 2, bioma: "floresta", tamanho: 5, animais: {} },
      { numero: 3, bioma: "savana e rio", tamanho: 7, animais: { gazela: 1 } },
      { numero: 4, bioma: "rio", tamanho: 8, animais: {} },
      { numero: 5, bioma: "savana", tamanho: 9, animais: { leao: 1 } },
    ];
  }

  getRecinto() {
    return this.recintos;
  }
}

export { Recinto };
