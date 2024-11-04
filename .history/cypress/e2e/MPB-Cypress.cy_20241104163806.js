describe('/karrier', () => { 
  it('should check for error message in div', () => {
    const fullPath = 'https://postabiztosito.hu/karrier2';

    // Látogassuk meg az oldalt
    cy.visit(fullPath);

    // Ellenőrizzük, hogy van-e olyan div, ami tartalmazza a megadott szöveget
    
  });
});