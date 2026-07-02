import mergeClass from "./mergeClass";

describe("./mergeClass.js", () => {
  test.each([
    { entrada: true, saida: "todo-item completed" },
    { entrada: false, saida: "todo-item" },
  ])(
    "deveria retornar as classes $saida quando o item completo for $entrada",
    ({ entrada, saida }) => {
      expect(mergeClass(entrada)).toBe(saida);
    },
  );
});
