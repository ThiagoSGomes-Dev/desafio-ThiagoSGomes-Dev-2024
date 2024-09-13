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
    // console.log(quantidade);
    console.log(animaisInfo.bioma);
    // console.log(animaisInfo.tamanho);

    if (!animaisInfo) {
      return { erro: "Animal inválido" };
    }
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
      return { erro: "Quantidade inválida" };
    }

    // if (!animaisInfo.biomas || !Array.isArray(animaisInfo.biomas)) {
    //   return { erro: "Dados de bioma inválidos para o animal" };
    // }
    // const recintoInfo = this.recintos.getRecinto();
    const recintosViaveis = this.recintos
      .getRecinto()
      .filter((recinto) => {
        const animalRecinto = recinto.animais[animal.toLowerCase()] || 0;
        console.log(animaisInfo.biomas);

        const biomaEspecifico = Array.isArray(recinto.bioma)
          ? recinto.bioma.some((bioma) => animaisInfo.bioma.includes(bioma))
          : animaisInfo.bioma.includes(recinto.bioma);

        // const biomaEspecifico = animaisInfo.biomas
        //   ? animaisInfo.biomas.includes(recinto.bioma)
        //   : recinto.bioma === animaisInfo.bioma;

        // console.log(biomaEspecifico);
        // console.log(animaisInfo.biomas.includes(recinto.bioma));

        const espacoAtual =
          recinto.tamanho - animalRecinto * animaisInfo.tamanho;
        // console.log(espacoAtual);

        const temOutrosAnimais = Object.keys(recinto.animais).some(
          (animalRecinto) => animalRecinto !== animal.toLowerCase()
        );
        // console.log(temOutrosAnimais);
        const espacoExtraOcupado = temOutrosAnimais
          ? espacoAtual - 1
          : espacoAtual;
        // console.log(espacoExtraOcupado);
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
