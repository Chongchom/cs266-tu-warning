describe('Test Location list page', () => {
  beforeEach('login', () => {
    cy.visit('/');
    cy.get('[data-test = "login-username"]').find('input').type('6409650055')
    cy.get('[data-test = "login-password"]').find('input').type('Chom@020446')
    cy.get('[data-test = "login-submit-button"]').click()
    cy.get("button.swal2-confirm.swal2-styled").click()
    cy.url().should('eq', 'http://localhost:3000/home');
    
  })
  
  it('Home icon element on navbar test', () => {
    cy.visit('/locationlist')
    cy.get('[data-test = "home-icon-element"]').click()
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it('LOcation list element test ', () => {
    cy.visit('/locationlist')
    cy.get('[data-test = "loaction-title"]').contains(/Location List/)
    
  })

  it('table test', () => {
    cy.visit('/locationlist')
    cy.get('[data-test = "location-table-id"]').contains(/ID/)
    cy.get('[data-test = "location-table-date"]').contains(/Date/)
    cy.get('[data-test = "location-table-name"]').contains(/Name/)
    cy.get('[data-test = "location-table-detail"]').contains(/Detail/)
    
  })

  

  
})