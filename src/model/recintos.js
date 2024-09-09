class Recinto {
  constructor() {
    this.recintos = [
      {
        numero: 1,
        bioma: "savana",
        tamanho: 10,
        animais: {
          macaco: 3,
          leão: 1,
        },
      },
      { numero: 2, bioma: "floresta", tamanho: 5, animais: {} },
      { numero: 3, bioma: "savana e rio", tamanho: 7, animais: { gazela: 1 } },
      { numero: 4, bioma: "rio", tamanho: 9, animais: { leão: 1 } },
    ];
  }

  getRecinto() {
    return this.recintos;
  }
}

export { Recinto };
