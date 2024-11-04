describe('/karrier', () => { 
  it('should check for error message in div', () => {
    const fullPath = 'https://postabiztosito.hu/karrier';

    // Látogassuk meg az oldalt
    cy.visit(fullPath);

    // Ellenőrizzük, hogy van-e olyan div, ami tartalmazza a megadott szöveget
    if (cy.get('.not-found__text').contains('Úgy tűnik porszem került a kézetbe.').length > 0) {
      // Ha van ilyen div, akkor hibát dobunk
      throw new Error('Nem található az oldal');
    }
  });
});

describe('/karrier2', () => { 
  it('should check for error message in div', () => {
    const fullPath = 'https://postabiztosito.hu/karrier2';

    // Látogassuk meg az oldalt
    cy.visit(fullPath);

    // Ellenőrizzük, hogy van-e olyan div, ami tartalmazza a megadott szöveget
    cy.get('.not-found__text').contains('Úgy tűnik porszem került a gépezetbe.').then(($div) => {
      if ($div.length > 0) {
        // Ha van ilyen div, akkor hibát dobunk
        throw new Error('Nem található az oldal');
      }
    });
  });
});