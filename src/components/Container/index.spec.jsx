import { render } from "@testing-library/react";
import { Container } from ".";

describe("Container", () => {
  test("deveria renderizar o componente corretamente", () => {
    const { getByText, container } = render(<Container>Qualquer children enviado</Container>);

    expect(getByText("Qualquer children enviado")).toBeInTheDocument();
    expect(container.querySelector(".container")).toBeInTheDocument();
  });
});
