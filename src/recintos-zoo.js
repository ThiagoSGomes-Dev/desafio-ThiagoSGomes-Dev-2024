class RecintosZoo {
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

    // this.recintos[1].animais.jaguar = 2;

    this.animais = {
      leao: { tamanho: 3, bioma: "savana" },
      leopardo: { tamanho: 2, bioma: "savana" },
      crocodilo: { tamanho: 1, bioma: "rio" },
      macaco: { tamanho: 2, biomas: ["savana", "floresta"] },
      gazela: { tamanho: 4, biomas: ["savana", "rio"] },
    };

    // this.animais.leao.tamanho = 10;
  }

  analisaRecintos(animal, quantidade) {
    const animaisInfo = this.animais;

    return animaisInfo;
  }
}

export { RecintosZoo as RecintosZoo };
