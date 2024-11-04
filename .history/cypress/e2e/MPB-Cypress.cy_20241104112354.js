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