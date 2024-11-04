describe('/karrier2', () => {
  it('should check for error message in div and API response', () => {
    const fullPath = 'https://postabiztosito.hu/karrier';

    cy.intercept('GET', '/cms/umbraco/customer/components/v1/generic-page?path=karrier').as('getGenericPage');

    cy.visit(fullPath);

    cy.wait('@getGenericPage').then((interception) => {

      expect(interception.response.statusCode).not.to.eq(404);

    });
});