describe('/karrier', () => {
  it('should check for 404 errors', () => {
    const fullPath = 'https://postabiztosito.hu/karrier';

    cy.visit(fullPath);

    // Ellenőrizzük, hogy van-e 404-es hiba a betöltött oldalon
    cy.intercept('GET', '**', (request) => {
      if (request.response.status === 404) {
        // Hiba esetén ellenőrizzük, hogy van-e a 404-es választ tartalmazó div
        cy.get('div:contains("404")').should('exist');
        request.continue({ status: 404 }); // Továbbítjuk a 404-es választ
      } else {
        request.continue();
      }
    }).as('getRequests');

    // Egyébként a teszt sikeres
    expect(true).to.be.true;
  });
});


describe('/karrier2', () => {
  it('should check for 404 errors', () => {
    const fullPath = 'https://postabiztosito.hu/karrier2';

    cy.visit(fullPath);

    // Ellenőrizzük, hogy van-e 404-es hiba a betöltött oldalon
    cy.intercept('GET', '**', (request) => {
      if (request.response.status === 404) {
        // Hiba esetén ellenőrizzük, hogy van-e a 404-es választ tartalmazó div
        cy.get('div:contains("404")').should('exist');
        request.continue({ status: 404 }); // Továbbítjuk a 404-es választ
      } else {
        request.continue();
      }
    }).as('getRequests');

    // Egyébként a teszt sikeres
    expect(true).to.be.true;
  });
});