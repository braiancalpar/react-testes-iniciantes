describe("deveria criar um item", () => {
  it("deveria criar um item", () => {
    cy.visit("http://192.168.4.184:5173/");
    cy.get(".fab").click();
    cy.get("input[name='description']").type("Minha tarefa para aprender Cypress");
    cy.get("button[type='submit']").click();
    cy.contains("Minha tarefa para aprender Cypress", { timeout: 5000 });
  });
});
