describe('Postabiztosító oldal elérése', () => {
  it('passes', () => {
    cy.visit('https://postabiztosito.hu')
  })
})

describe('Hello oldal elérése', () => {
  it('passes', () => {
    cy.visit('https://hello.hu')
  })
})

describe('Hello oldal elérése', () => {
  it('should return 404 status', () => {
    cy.request({
      url: 'https://hello.hu/nincsilyenoldal',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});