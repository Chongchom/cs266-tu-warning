describe('Test Location list page', () => {

  
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