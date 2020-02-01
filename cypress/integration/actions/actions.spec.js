/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Should populate [To] input when typing to [From] input", () => {
    //cypress needs time to load
    cy.wait(1000);
    cy.get(`[data-test-id="input"]`)
      .first()
      .type("7")
      .trigger("input");

    cy.get(`[data-test-id="input"]`)
      .eq(1)
      .should("have.value", "+5.89");
  });

  it("Should populate [From] input when typing to [To] input", () => {
    cy.get(`[data-test-id="input"]`)
      .eq(1)
      .clear()
      .type(9);

    cy.get(`[data-test-id="input"]`)
      .first()
      .should("have.value", "-10.69");
  });

  it("Should reset input values when clicking [Convert] button", () => {
    cy.get(`[data-test-id="input"]`)
      .first()
      .clear()
      .type("7");

    cy.get(`[data-test-id="button"]`).click();

    cy.get(`[data-test-id="input"]`)
      .first()
      .should("have.value", "");

    cy.get(`[data-test-id="input"]`)
      .eq(1)
      .should("have.value", "");
  });

  it("Should withdraw from [From] balance after clicking [Convert] Button", () => {
    cy.get(`[data-test-id="input"]`)
      .first()
      .clear()
      .type("7");

    cy.get(`[data-test-id="button"]`).click();

    cy.get(`[data-test-id="balance"]`)
      .first()
      .should("have.text", "Balance: 93 €");
  });

  it("Should add to [To] balance after clicking [Convert] Button", () => {
    cy.get(`[data-test-id="input"]`)
      .first()
      .clear()
      .type("7");

    cy.get(`[data-test-id="button"]`).click();

    cy.get(`[data-test-id="balance"]`)
      .eq(1)
      .should("have.text", "Balance: 5.89 £");
  });

  it("Should disable the button if [From] input value bigger than balance", () => {
    cy.get(`[data-test-id="input"]`)
      .first()
      .type("77777");

    cy.get(`[data-test-id="button"]`).should("be.disabled");
  });

  it("Should disable the button if [From] and [To] have the same currency", () => {
    cy.get(`[data-test-id="dropdown"]`)
      .first()
      .click();
    cy.get(`[data-test-id="option"]:visible`)
      .eq(1)
      .click();
  });

  it("Should switch currencies when clicking [Switch] button", () => {
    cy.get(`[data-test-id="switch"]`).click();
    cy.get(`[data-test-id="dropdown"]`)
      .first()
      .should("have.text", "GBP");
    cy.get(`[data-test-id="dropdown"]`)
      .eq(1)
      .should("have.text", "EUR");
  });
});
