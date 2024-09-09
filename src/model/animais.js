class Animais {
  constructor() {
    this.animais = {
      leao: { tamanho: 3, bioma: "savana" },
      leopardo: { tamanho: 2, bioma: "savana" },
      crocodilo: { tamanho: 1, bioma: "rio" },
      macaco: { tamanho: 2, biomas: ["savana", "floresta"] },
      gazela: { tamanho: 4, biomas: ["savana", "rio"] },
    };
  }

  getAnimais() {
    return this.animais;
  }
}

export { Animais };
