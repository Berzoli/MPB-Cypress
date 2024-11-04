describe('API Call Tests', () => {
  beforeEach(() => {
    // Interceptáljuk az összes GET kérést
    cy.intercept('GET', '**/*').as('getRequests');
  });

  it('should not have any 404 responses', () => {
    // Az oldal betöltése (cseréld ki a saját oldaladra)
    cy.visit('https://postabiztosito.hu/karrier');

    // Várakozás az összes GET kérésre
    cy.wait('@getRequests').then((interception) => {
      // Ellenőrizzük, hogy van-e 404-es válasz
      const has404 = interception.response.statusCode === 404;

      // Ha van 404-es válasz, dobunk egy hibát
      if (has404) {
        throw new Error('Found a 404 response');
      }
    });
  });
});

describe('API Call Tests', () => {
  beforeEach(() => {
    // Interceptáljuk az összes GET kérést
    cy.intercept('GET', '**/*').as('getRequests');
  });

  it('should not have any 404 responses', () => {
    // Az oldal betöltése (cseréld ki a saját oldaladra)
    cy.visit('https://postabiztosito.hu/karrier2');

    // Várakozás az összes GET kérésre
    cy.wait('@getRequests').then((interception) => {
      // Ellenőrizzük, hogy van-e 404-es válasz
      const has404 = interception.response.statusCode === 404;

      // Ha van 404-es válasz, dobunk egy hibát
      if (has404) {
        throw new Error('Found a 404 response');
      }
    });
  });
});