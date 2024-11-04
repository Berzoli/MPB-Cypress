describe('API Call Tests', () => {
  beforeEach(() => {
    // Interceptáljuk az összes GET kérést
    cy.intercept('GET', '**/*').as('getRequests');
  });

  it('should not have any 404 responses', () => {
    // Az oldal betöltése
    cy.visit('https://postabiztosito.hu/karrier');

    // Ellenőrizzük a 404-es válaszokat
    const checkFor404 = () => {
      cy.wait('@getRequests').then((interception) => {
        if (interception.response && interception.response.statusCode === 404) {
          throw new Error('Found a 404 response');
        }
        // Ha nem volt 404, indítsunk egy új ellenőrzést
        checkFor404();
      });
    };

    // Kezdjük el az ellenőrzést
    checkFor404();
  });
});

describe('API Call Tests', () => {
  beforeEach(() => {
    // Interceptáljuk az összes GET kérést
    cy.intercept('GET', '**/*').as('getRequests');
  });

  it('should not have any 404 responses', () => {
    // Az oldal betöltése
    cy.visit('https://postabiztosito.hu/karrier2');

    // Ellenőrizzük a 404-es válaszokat
    const checkFor404 = () => {
      cy.wait('@getRequests').then((interception) => {
        if (interception.response && interception.response.statusCode === 404) {
          throw new Error('Found a 404 response');
        }
        // Ha nem volt 404, indítsunk egy új ellenőrzést
        checkFor404();
      });
    };

    // Kezdjük el az ellenőrzést
    checkFor404();
  });
});