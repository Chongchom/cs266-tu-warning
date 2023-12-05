describe('Test homepage', () => {
  beforeEach('login', () => {
    cy.visit('/');
    cy.get('[data-test = "login-username"]').find('input').type('6409650055')
    cy.get('[data-test = "login-password"]').find('input').type('Chom@020446')
    cy.get('[data-test = "login-submit-button"]').click()
    cy.get("button.swal2-confirm.swal2-styled").click()
    cy.url().should('eq', 'http://localhost:3000/home');
    
  })
  
  
  it('Home element test', () => {
    
    cy.get('[data-test = "show-card-to-person-list"]').contains(/Dangerous person list/)
    cy.get('[data-test = "show-person-list-button"]').contains(/Go to list/)
    cy.get('[data-test = "show-card-to-location-list"]').contains(/Dangerous place list/)
    cy.get('[data-test = "show-location-list-button"]').contains(/Go to list/)
  })
  it('click to go to person list view', () => {
    cy.get('[data-test="show-person-list-button"]').click();
    cy.location("pathname").should("equal", "/personlist")
    
  });

it('click to go to location list view', () => {
  cy.get('[data-test = "show-location-list-button"]').click();
  cy.location("pathname").should("equal", "/locationlist")
  
});

})