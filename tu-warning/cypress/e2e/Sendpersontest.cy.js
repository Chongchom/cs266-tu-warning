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
  cy.visit('/sendperson');
  cy.get('[data-test = "person-subscribe-name"]').find('input').type('ชมพู่')
  cy.get('[data-test = "person-subscribe-detail"]').find('input').type('แซงคิวซื้อยำยูป้า')
  cy.get('[data-test = "person-submit-button"]').click()
  cy.pause()
  cy.visit('/personlist');
  cy.pause()
  
})

it('empty form', () => {
  cy.visit('/sendperson');
  cy.get('[data-test = "person-submit-button"]').click()
  cy.pause()
  
})
})