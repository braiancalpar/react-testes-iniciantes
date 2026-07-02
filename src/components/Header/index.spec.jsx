import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  test("deveria renderizar o componente", () => {
    expect(render(<Header />)).toBeTruthy();
  });

  test("deveria renderizar o componente com a classe correta", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toHaveClass("header");
  });
});
