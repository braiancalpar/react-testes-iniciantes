import { render } from "@testing-library/react";
import React from "react";
import { ToDoItem } from ".";
import { TodoContext } from "../TodoProvider/TodoContext";
import userEvent from "@testing-library/user-event";

describe("ToDoItem", () => {
  test("deveria renderizar o item corretamente", () => {
    const item = {
      description: "Aprender Jest",
      createdAt: "2026-07-02T10:00:00.000Z",
      completed: false,
    };
    const { getByText, getByRole } = render(
      <TodoContext.Provider value={{}}>
        <ToDoItem item={item} />
      </TodoContext.Provider>,
    );

    expect(getByText("Aprender Jest")).toBeInTheDocument();
    expect(getByText("02/07/2026")).toBeInTheDocument();
    expect(getByRole("checkbox")).not.toBeChecked();
  });
  test("deveria chamar a função selectTodoForEdit quando o botão for clicado", async () => {
    const funcaoSimulandoSelectTodoForEdit = jest.fn();
    const item = {
      description: "Editar Jest",
      createdAt: "2026-07-02T10:00:00.000Z",
      completed: false,
    };
    const { getByRole } = render(
      <TodoContext.Provider value={{ selectTodoForEdit: funcaoSimulandoSelectTodoForEdit }}>
        <ToDoItem item={item} />
      </TodoContext.Provider>,
    );

    const button = getByRole("button", {
      name: /edit/i,
    });
    await userEvent.click(button);

    expect(funcaoSimulandoSelectTodoForEdit).toHaveBeenCalledWith(item);
  });
});
