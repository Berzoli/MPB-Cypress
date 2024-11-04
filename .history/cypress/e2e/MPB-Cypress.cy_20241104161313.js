describe('/karrier', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrier';

    // Ellenőrizzük a státuszkódot
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      if (response.status !== 200) {
        cy.get(div).contains('Úgy tűnik porszem került a gépezetbe.')
      }
      cy.visit(fullPath);
    });
  });
});

describe('/karrier2', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrier2';

    // Ellenőrizzük a státuszkódot
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      if (response.status !== 200) {
        throw new Error(`Hiba: A státuszkód ${response.status} - az oldal nem érhető el: ${fullPath}`);
      }
      cy.visit(fullPath);
    });
  });
});