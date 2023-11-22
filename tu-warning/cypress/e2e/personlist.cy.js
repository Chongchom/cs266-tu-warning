describe('Test Person list page', () => {

  
  it('Home element test', () => {
    cy.visit('/personlist')
    cy.get('[data-test = "home-icon-element"]').click()
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it('Home element test', () => {
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