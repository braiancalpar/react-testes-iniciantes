import { render } from "@testing-library/react";
import React from "react";
import { FabButton } from ".";
describe("FabButton", () => {
  test("deveria renderizar corretamente o componente", () => {
    const { getByRole } = render(<FabButton onClick={() => {}}>Texto simples</FabButton>);
    const button = getByRole("button");
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("fab");
    expect(button).toHaveTextContent("Texto simples");
  });
});
