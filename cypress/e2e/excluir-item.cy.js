describe("Deveria excluir um item", () => {
  it("excluir-item", function () {
    cy.visit("http://192.168.4.184:5173/");

    cy.contains("Minha tarefa para aprender Cypress", { timeout: 6000 })
      .parent()
      .find("[aria-label='delete']")
      .click();

    cy.contains("Minha tarefa para aprender Cypress").should("not.exist");
  });
});
