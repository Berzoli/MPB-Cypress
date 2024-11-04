
describe('/karrier', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrier';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/papirmentesseg', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/papirmentesseg33';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});