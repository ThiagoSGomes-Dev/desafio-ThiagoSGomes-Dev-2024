import { RecintosZoo } from "../recintos-zoo";

describe("Test: Thiago dos Santos Gomes", () => {
  class MockRecinto {
    getRecinto() {
      return [{ animais: { leao: 2, gazela: 3 } }];
    }
  }

  class MockAnimais {
    getAnimais() {
      return {
        leao: { tamanho: 10 },
        gazela: { tamanho: 3 },
      };
    }
  }

  test("deve retornar erro quando o animal é inválido", () => {
    const zoo = new RecintosZoo();
    zoo.recintos = new MockRecinto();
    zoo.animais = new MockAnimais();

    const resultado = zoo.analisaRecintos("tigre", 2);

    expect(resultado).toEqual({ erro: "Animal inválido" });
  });
});
