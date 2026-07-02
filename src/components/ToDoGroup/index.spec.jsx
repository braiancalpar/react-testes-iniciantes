import { render } from "@testing-library/react";
import React from "react";
import ToDoGroup from ".";
import { TodoContext } from "../TodoProvider/TodoContext";
describe("ToDoGroup", () => {
  test("deveria renderizar a mensagem de carregando quando o isLoading for true", () => {
    const { getByText, queryAllByRole } = render(
      <ToDoGroup isLoading={true} todos={[]} heading="Teste" />,
    );

    expect(getByText("Carregando...")).toBeInTheDocument();
    expect(queryAllByRole("listitem")).toHaveLength(0);
  });

  test("deveria renderizar a mensagem de lista vazia quando não tiver itens", () => {
    const { getByText, queryByText, queryAllByRole } = render(
      <ToDoGroup isLoading={false} todos={[]} heading="Teste" />,
    );

    expect(getByText("Nenhum item encontrado")).toBeInTheDocument();
    expect(queryByText("Carregando...")).toBeNull();
    expect(queryAllByRole("listitem")).toHaveLength(0);
  });

  test("deveria renderizar o componente corretamente", () => {
    const { getByText, queryAllByRole } = render(<ToDoGroup todos={[]} heading="Teste" />);

    expect(getByText("Teste")).toBeInTheDocument();
    expect(queryAllByRole("listitem")).toHaveLength(0);
  });

  test("deveria renderizar os itens do grupo corretamente", () => {
    const items = [
      {
        id: 1,
        description: "Estudar React",
        completed: false,
        createdAt: "2026-07-02T10:00:00.000Z",
      },
      {
        id: 2,
        description: "Estudar Jest",
        completed: true,
        createdAt: "2026-07-01T10:00:00.000Z",
      },
    ];
    const { getByText, queryAllByRole } = render(
      <TodoContext.Provider value={{}}>
        <ToDoGroup todos={items} heading="Teste" />
      </TodoContext.Provider>,
    );

    expect(queryAllByRole("listitem")).toHaveLength(2);

    const todoItem1 = getByText("Estudar React");
    expect(todoItem1).toBeInTheDocument();

    const todoItem2 = getByText("Estudar Jest");
    expect(todoItem2).toBeInTheDocument();
  });
});
