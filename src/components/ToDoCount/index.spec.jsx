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
});
