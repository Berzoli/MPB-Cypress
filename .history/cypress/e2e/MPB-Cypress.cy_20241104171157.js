describe('Check for not-found text', () => {
  it('should find the paragraph containing specific text', () => {
    const url = 'https://postabiztosito.hu/karrier2'; // Cseréld ki a megfelelő URL-re

    // Látogassuk meg az oldalt
    cy.visit(url);

    // Ellenőrizzük, hogy a p tag létezik, és tartalmazza a megadott szöveget
    cy.get('p') // Megkeresi az összes p tag-et
      .contains('Úgy tűnik porszem került a gépezetbe.') // Ellenőrzi, hogy tartalmazza a szöveget
      .should('not.exist'); // Ellenőrzi, hogy az elem létezik
  });
});