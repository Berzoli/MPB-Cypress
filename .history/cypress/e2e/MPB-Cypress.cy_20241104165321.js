describe('/karrier2', () => {
  it('should check the status code for the API endpoint', () => {
    const apiUrl = 'https://postabiztosito.hu/cms/umbraco/customer/components/v1/generic-page?path=karrier2';

    // Lekérjük az API végpontot
    cy.request(apiUrl)
      .then((response) => {
        // Ellenőrizzük a státuszkódot
        expect(response.status).to.eq(404);
        // Itt további ellenőrzéseket végezhetsz, például a válasz tartalmát is
        // expect(response.body).to.contain('várható hibaüzenet');
      });
  });
});

