describe("Deveria editar um item", () => {
  it("excluir-item", function () {
    cy.visit("http://192.168.4.184:5173/");

    cy.contains("Minha tarefa para aprender Cypress", { timeout: 6000 })
      .parent()
      .find("[aria-label='edit']")
      .click();

    cy.get("input[name='description']").clear().type("Minha tarefa ATUALIZADA APRENDENDO Cypress");
    cy.get("button[type='submit']").click();
    cy.contains("Minha tarefa ATUALIZADA APRENDENDO Cypress");
  });
});
