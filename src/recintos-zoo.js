import { Animais } from "./model/animais.js";
import { Recinto } from "./model/recintos.js";

class RecintosZoo {
  constructor() {
    this.recintos = new Recinto();

    // this.recintos.getRecinto()[1].animais.jaguar = 2;

    this.animais = new Animais();

    // this.animais.getAnimais().leao.tamanho = 10;
    // this.animais.getAnimais().gazela.tamanho = 3;
  }

  analisaRecintos(animal, quantidade) {
    // const animaisInfo = this.animais.getAnimais();
    const animaisInfo = this.animais.getAnimais()[animal.toLowerCase()];
    if (!animaisInfo) {
      return { erro: "Animal inválido" };
    }
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
      return { erro: "Quantidade inválida" };
    }

    return animaisInfo;
  }
}

export { RecintosZoo as RecintosZoo };
