describe('Send information', () => {
  beforeEach('login', () => {
    cy.visit('/');
    cy.get('[data-test = "login-username"]').find('input').type('6409650055')
    cy.get('[data-test = "login-password"]').find('input').type('Chom@020446')
    cy.get('[data-test = "login-submit-button"]').click()
    cy.get("button.swal2-confirm.swal2-styled").click()
    cy.url().should('eq', 'http://localhost:3000/home');
    
  })
    // Visit the page before each test
    
  
  it('Subscibe form', () => {
    cy.visit('/sendlocation');
    cy.get('[data-test = "location-subscribe-name"]').find('input').type('บร.3')
    cy.get('[data-test = "location-subscribe-detail"]').find('input').type('แอร์เย็นมาก')
    cy.get('[data-test = "location-submit-button"]').click()
    cy.pause()
    cy.visit('/locationlist');
    cy.pause()
    
  })

  it('Empty form', () => {
    cy.visit('/sendlocation');
    cy.get('[data-test = "location-submit-button"]').click()
    cy.pause()
    
  })
})