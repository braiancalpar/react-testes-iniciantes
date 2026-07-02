import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import FormToDo from ".";
import { TodoContext } from "../TodoProvider/TodoContext";
describe("FormToDo", () => {
  test("deveria renderizar o form corretamente", () => {
    const { getByRole } = render(
      <TodoContext.Provider value={{ selectedTodo: { description: "Um exemplo qualquer" } }}>
        <FormToDo onSubmit={() => {}}></FormToDo>
      </TodoContext.Provider>,
    );

    expect(getByRole("form")).toBeInTheDocument();
  });
  test("deveria renderizar a descrição do todo selecionado", () => {
    const { getByRole } = render(
      <TodoContext.Provider
        value={{ selectedTodo: { description: "Um exemplo qualquer NOVAMENTE" } }}
      >
        <FormToDo onSubmit={() => {}}></FormToDo>
      </TodoContext.Provider>,
    );

    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByRole("textbox")).toHaveValue("Um exemplo qualquer NOVAMENTE");
  });

  test("deveria enviar o form com a descrição atualizada", async () => {
    const funcaoSimulandoSubmit = jest.fn();
    const { getByRole } = render(
      <TodoContext.Provider
        value={{ selectedTodo: { description: "Um exemplo qualquer NOVAMENTE" } }}
      >
        <FormToDo onSubmit={funcaoSimulandoSubmit}></FormToDo>
      </TodoContext.Provider>,
    );

    const input = getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "Um novo curso para estudar");

    const button = getByRole("button", { name: /salvar item/i });
    await userEvent.click(button);

    expect(funcaoSimulandoSubmit).toHaveBeenCalled();
  });
});
