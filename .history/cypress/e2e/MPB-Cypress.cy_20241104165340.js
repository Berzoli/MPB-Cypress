describe('/karrier2', () => {
  it('should check for error message in div and API response', () => {
    const fullPath = 'https://postabiztosito.hu/karrier2';

    // Interceptáljuk az API hívást
    cy.intercept('GET', '/cms/umbraco/customer/components/v1/generic-page?path=karrier2').as('getGenericPage');

    // Látogassuk meg az oldalt
    cy.visit(fullPath);

    // Várakozzunk az API hívásra
    cy.wait('@getGenericPage').then((interception) => {
      // Ellenőrizzük a státuszkódot
      expect(interception.response.statusCode).to.eq(404);
      // Itt további ellenőrzéseket végezhetsz, például a válasz tartalmát is
    });

    // Ellenőrizzük, hogy az üzenet látható-e a div-ben
    cy.get('div.error-message') // Cseréld ki a megfelelő szelektorra
      .should('contain', 'A várt hibaüzenet'); // Cseréld ki a várt hibaüzenetre
  });
});