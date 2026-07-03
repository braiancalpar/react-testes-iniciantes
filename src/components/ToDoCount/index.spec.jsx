import { render } from "@testing-library/react";
import React from "react";
import { ToDoCount } from ".";
import { getTodos } from "../../services/TodoService";

jest.mock("../../services/TodoService");

describe("ToDoCount", () => {
  test("deveria renderizar o componente corretamente", async () => {
    getTodos.mockResolvedValue([]);
    
    const { findByText } = render(<ToDoCount />);

    const count = await findByText("0");

    expect(count).toBeInTheDocument();
  });
  test("deveria renderizar o contador com itens corretamente", async () => {
    getTodos.mockResolvedValue([
        { id: 1, description: "Teste 1", completed: false, createdAt: new Date().toISOString() },
        { id: 2, description: "Teste 2", completed: true, createdAt: new Date().toISOString() },
    ]);

    const { findByText } = render(<ToDoCount />);

    const count = await findByText("2");

    expect(count).toBeInTheDocument();
  });
});
