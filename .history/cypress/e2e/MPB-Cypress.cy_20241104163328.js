describe("API Call Tests", () => {
  beforeEach(() => {
    // Interceptáljuk az összes GET kérést
    cy.intercept("GET", "**/*").as("getRequests");
  });

  it("should not have any 404 responses", () => {
    // Az oldal betöltése
    cy.visit(
      "https://postabiztosito.hu/cms/umbraco/customer/components/v1/generic-page?path=karrier2"
    );
  });
});
