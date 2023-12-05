describe('Test Person list page', () => {
  beforeEach('login', () => {
    cy.visit('/');
    cy.get('[data-test = "login-username"]').find('input').type('6409650055')
    cy.get('[data-test = "login-password"]').find('input').type('Chom@020446')
    cy.get('[data-test = "login-submit-button"]').click()
    cy.get("button.swal2-confirm.swal2-styled").click()
    cy.url().should('eq', 'http://localhost:3000/home');
    
  })
  
  it('Home icon element on navbar test', () => {
    cy.visit('/personlist')
    cy.get('[data-test = "home-icon-element"]').click()
    cy.url().should('eq', 'http://localhost:3000/home');
  })

  it('Personlist element test', () => {
    cy.visit('/personlist')
    cy.get('[data-test = "personlist-title"]').contains(/Person List/)
    
  })

  it('table test', () => {
    cy.visit('/personlist')
    cy.get('[data-test = "person-table-id"]').contains(/ID/)
    cy.get('[data-test = "person-table-avatar"]').contains(/Avatar/)
    cy.get('[data-test = "person-table-date"]').contains(/Date/)
    cy.get('[data-test = "person-table-name"]').contains(/Name/)
    cy.get('[data-test = "person-table-detail"]').contains(/Detail/)
    
  })

  

  
})