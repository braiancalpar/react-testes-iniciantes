import { act, render, waitFor } from "@testing-library/react";
import React from "react";
import { TodoProvider } from ".";
import { getTodos } from "../../services/TodoService";

jest.mock("../../services/TodoService");

describe("TodoProvider", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  test("deveria renderizar o provider corretamente buscando os todos ao montar", async () => {
    render(<TodoProvider />);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => expect(getTodos).toHaveBeenCalled());
  });
});
