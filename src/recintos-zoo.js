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
    const animaisInfo = this.animais.getAnimais()[animal.toLowerCase()];

    if (!animaisInfo) {
      return { erro: "Animal inválido" };
    }
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
      return { erro: "Quantidade inválida" };
    }

    const recintosViaveis = this.recintos
      .getRecinto()
      .filter((recinto) => {
        const animalRecinto = recinto.animais[animal.toLowerCase()] || 0;

        const biomaCompativel = this.recintos
          .getRecinto()
          .map((recinto) => recinto.bioma);

        const biomaEspecifico = Array.isArray(recinto.bioma)
          ? recinto.bioma.some((bioma) => animaisInfo.biomas.includes(bioma))
          : animaisInfo.biomas.includes(recinto.bioma);

        // console.log(this.recintos.getRecinto().map((recinto) => recinto.bioma));

        const espacoAtual =
          recinto.tamanho - animalRecinto * animaisInfo.tamanho;

        const temOutrosAnimais = Object.keys(recinto.animais).some(
          (animalRecinto) => animalRecinto !== animal.toLowerCase()
        );

        const espacoExtraOcupado = temOutrosAnimais
          ? espacoAtual - 1
          : espacoAtual;

        return (
          biomaEspecifico &&
          espacoExtraOcupado >= quantidade * animaisInfo.tamanho
        );
      })
      .map((recinto) => {
        const animalRecinto = recinto.animais[animal.toLowerCase()] || 0;

        const espacoAtual =
          recinto.tamanho - animalRecinto * animaisInfo.tamanho;

        const temOutrosAnimais = Object.keys(recinto.animais).some(
          (animalRecinto) => animalRecinto !== animal.toLowerCase()
        );

        const espacoExtraOcupado = temOutrosAnimais
          ? espacoAtual - 1
          : espacoAtual;

        return `Recinto ${recinto.numero} (espaço livre: ${
          espacoExtraOcupado - quantidade * animaisInfo.tamanho
        } total: ${recinto.tamanho})`;
      });

    if (recintosViaveis.length === 0) {
      return { erro: "Não há recinto viável" };
    }

    return { recintosViaveis };
  }
}

export { RecintosZoo as RecintosZoo };
