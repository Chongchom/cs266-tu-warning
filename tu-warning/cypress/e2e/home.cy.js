describe('Test homepage', () => {
  it('Home element test', () => {
    cy.visit('/')
    cy.get('[data-test = "show-card-to-person-list"]').contains(/Dangerous person list/)
    cy.get('[data-test = "show-person-list-button"]').contains(/Go to list/)
    cy.get('[data-test = "show-card-to-location-list"]').contains(/Dangerous place list/)
    cy.get('[data-test = "show-location-list-button"]').contains(/Go to list/)
  })
  it('click to go to person list view', () => {
    cy.visit('/');
    cy.get('[data-test="show-person-list-button"]').click();
    cy.url().should('eq', 'http://localhost:3000/personlist');
  });

it('click to go to location list view', () => {
  
  cy.visit('/');
  cy.get('[data-test="show-location-list-button"]').click();
  cy.url().should('eq', 'http://localhost:3000/locationlist');
});

})