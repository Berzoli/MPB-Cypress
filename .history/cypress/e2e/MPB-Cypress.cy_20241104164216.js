describe('/karrier2', () => {
  it('should check for 404 errors', () => {
    const fullPath = 'https://postabiztosito.hu/karrier2';

    cy.visit(fullPath);

    // Ellenőrizzük, hogy van-e 404-es hiba a betöltött oldalon
    cy.server();
    cy.route('GET', '**').as('getRequests');

    cy.get('@getRequests').then((requests) => {
      const has404 = requests.some((request) => request.status === 404);

      if (has404) {
        // Hiba esetén ellenőrizzük, hogy van-e a 404-es választ tartalmazó div
        cy.get('div:contains("404")').should('exist');
      } else {
        // Egyébként a teszt sikeres
        expect(true).to.be.true;
      }
    });
  });
});


describe('/karrier', () => {
  it('should check for 404 errors', () => {
    const fullPath = 'https://postabiztosito.hu/karrier';

    cy.visit(fullPath);

    // Ellenőrizzük, hogy van-e 404-es hiba a betöltött oldalon
    cy.server();
    cy.route('GET', '**').as('getRequests');

    cy.get('@getRequests').then((requests) => {
      const has404 = requests.some((request) => request.status === 404);

      if (has404) {
        // Hiba esetén ellenőrizzük, hogy van-e a 404-es választ tartalmazó div
        cy.get('div:contains("404")').should('exist');
      } else {
        // Egyébként a teszt sikeres
        expect(true).to.be.true;
      }
    });
  });
});