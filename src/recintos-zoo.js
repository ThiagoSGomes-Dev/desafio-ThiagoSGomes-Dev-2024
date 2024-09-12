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
    // const recintoInfo = this.recintos.getRecinto();
    const recintosViaveis = this.recintos
      .getRecinto()
      .filter((recinto) => {
        const animalRecinto = recinto.animais[animal.toLowerCase()] || 0;

        const biomaEspecifico = animaisInfo.biomas
          ? animaisInfo.biomas.includes(recinto.bioma)
          : recinto.bioma === animaisInfo.bioma;

        const espacoAtual =
          recinto.tamanho - animalRecinto * animaisInfo.tamanho;

        const espacoDisponivel =
          espacoAtual - (Object.keys(recinto.animais).length > 0 ? 1 : 0);

        return (
          biomaEspecifico &&
          espacoDisponivel >= quantidade * animaisInfo.tamanho
        );
      })
      .map((recinto) => {
        const animalRecinto = recinto.animais[animal.toLowerCase()] || 0;
        const espacoAtual =
          recinto.tamanho - animalRecinto * animaisInfo.tamanho;

        // Ajuste do espaço disponível
        const espacoDisponivel =
          espacoAtual - (Object.keys(recinto.animais).length > 0 ? 1 : 0);

        return `Recinto ${recinto.numero} (espaço livre: ${
          espacoDisponivel - quantidade * animaisInfo.tamanho
        } total: ${recinto.tamanho})`;
      });

    if (recintosViaveis.length === 0) {
      return { erro: "Não há recinto viável" };
    }

    return recintosViaveis;
  }
}

export { RecintosZoo as RecintosZoo };
