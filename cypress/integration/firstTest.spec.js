describe('login', () => {
  beforeEach(() => {
    cy.visit('http://testing-ground.scraping.pro/login')
  })

  it('Succesful login', () => {
    cy.get('#usr')
      .type('admin')
    cy.get('#pwd')
      .type('12345')
    cy.get('[type="submit"]')
      .click()
    cy.url()
      .should('include', 'mode=welcome')
  })
})