import { render } from "@testing-library/react";
import { Header } from ".";

// NOTA: lembre-se que você pode usar .only (ou fdescribe, ftest),
//  .skip (ou xtest, xdescribe), e .each.
describe("Header", () => {
  test("deveria renderizar o componente", () => {
    expect(render(<Header />)).toBeTruthy();
  });

  test("deveria renderizar o componente com a classe correta", () => {
    const { container, debug } = render(
      <Header>
        <span>teste de exemplo</span>
      </Header>,
    );

    debug();

    expect(container.firstChild).toHaveClass("header");
  });
});
