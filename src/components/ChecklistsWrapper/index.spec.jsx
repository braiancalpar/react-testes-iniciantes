import { render } from "@testing-library/react";
import { ChecklistsWrapper } from ".";

describe("ChecklistsWrapper", () => {
  test("deveria renderizar o componente corretamente", () => {
    const { getByText, container } = render(<ChecklistsWrapper>Qualquer children enviado</ChecklistsWrapper>);

    expect(getByText("Qualquer children enviado")).toBeInTheDocument();
    expect(container.querySelector(".wrapper")).toBeInTheDocument();
  });
});