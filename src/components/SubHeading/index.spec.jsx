import React from "react";
import { render } from "@testing-library/react";
import { SubHeading } from ".";

describe("SubHeading", () => {
    /**
   * getBy: Para elementos que DEVEM estar na tela imediatamente
   * É síncrono e "exigente": se não encontrar o elemento imediatamente, o teste falha. Use quando você tem certeza de que o elemento deve estar lá.
   *
   * NOTE: o segundo teste "está certo", mas após nosso aprendizado, sabemos que não é o ideal porque devíamos esperar o teste quebrando
   *  e não retornando null.
   */
  describe("getBy", () => {
    test("deveria renderizar o componente corretamente", () => {
      const { getByText } = render(<SubHeading>Para estudar</SubHeading>);
      expect(getByText("Para estudar")).toBeInTheDocument();
    });

    test.skip("não deveria renderizar o componente quando não tem children", () => {
      const { getByText } = render(<SubHeading></SubHeading>);
      expect(getByText("Para estudar")).toBeNull();
    });
  });

  /**
   * queryBy: Para elementos que PODEM ou NÃO estar na tela
   * É síncrono e "tolerante": se não encontrar, retorna null sem quebrar o teste. Perfeito para verificar que algo NÃO está na tela.
   *
   * NOTE: a ideia do teste é exatamente a mesma, mas se adicionarmos o exemplo de if quando não tiver children e NÃO passarmos children,
   *  é melhor usar o queryByText porque isso deixará nosso teste mais robusto para ambas situações.
   */
  describe("queryBy", () => {
    test("deveria renderizar o componente corretamente", () => {
      const { queryByText } = render(<SubHeading>Para estudar</SubHeading>);
      expect(queryByText("Para estudar")).toBeInTheDocument();
    });

    test("não deveria renderizar o componente quando não tem children", () => {
      const { queryByText } = render(<SubHeading></SubHeading>);
      expect(queryByText("Para estudar")).toBeNull();
    });
  });
});
