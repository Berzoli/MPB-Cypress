describe('Hello oldal elérése', () => {
  it('should return 404 status', () => {
    cy.request({
      url: 'https://postabiztosito.hu/nincsilyenoldal',
      failOnStatusCode: false  // Kikapcsolja a Cypress hibadobását nem 2xx státuszkódnál
    }).then((response) => {
      expect(response.status).to.eq(404); // Ellenőrzi, hogy a státuszkód 404-e
    });
  });
});