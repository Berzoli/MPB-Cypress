describe('Check for not-found text', () => {
  it('should not find the element with class not-found__text', () => {
    const url = 'https://postabiztosito.hu/karrier2'; // Cseréld ki a megfelelő URL-re

    // Látogassuk meg az oldalt
    cy.visit(url);

    // Ellenőrizzük, hogy az elem nem található
    cy.get('.not-found__text mb-3').should('not.exist');
  });
});