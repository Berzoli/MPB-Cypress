describe('Check for not-found text', () => {
  it('should not find the element with class not-found__text mb-3', () => {
    const url = 'https://postabiztosito.hu/karrier'; // Cseréld ki a megfelelő URL-re

    // Látogassuk meg az oldalt
    cy.visit(url);

    // Várakozás az elem megjelenésére
    cy.get('body').should('be.visible'); // Ellenőrizzük, hogy a body látható

    // Ellenőrizzük, hogy az elem nem található
    cy.get('.not-found__text.mb-3', { timeout: 10000 }).should('not.exist');
  });
});