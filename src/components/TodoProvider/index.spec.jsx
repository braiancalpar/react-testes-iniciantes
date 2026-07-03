import { render } from "@testing-library/react";
import React from "react";
import { TodoProvider } from ".";
import { getTodos } from "../../services/TodoService";

jest.mock("../../services/TodoService");

describe("TodoProvider", () => {
  test("deveria renderizar o provider corretamente buscando os todos ao montar", () => {
    render(<TodoProvider />);

    expect(getTodos).toHaveBeenCalled();
  });
});
