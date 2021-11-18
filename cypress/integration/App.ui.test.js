describe("App", () => {
  it("should have header", () => {
    cy.visit("/");
    cy.get("h1").contains("Address Book");
  });
  
  it("should have specific contact inside", () => {
    cy.visit("/");
    cy.get("div[class*='addressBook']").contains("Anderson");
  });

  it("should be able to navigate to Anderson contact details", () => {
    cy.visit("/");
    cy.get("img[alt*='Anderson']").click();

    cy.get("div").should("contain.text", "Sophie Anderson"); // check if name exist
    cy.get("img:nth(1)").should("have.attr", "src", "https://randomuser.me/api/portraits/women/29.jpg"); // check if name exist
    cy.get("div").should("contain.text", "079-185-6266"); // check if phone no exist
    cy.get("div").should("contain.text", "823-134-3583"); // check if cell no exist
  });
});
