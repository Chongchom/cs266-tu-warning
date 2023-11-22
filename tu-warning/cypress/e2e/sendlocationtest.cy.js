describe('Send information', () => {
 
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