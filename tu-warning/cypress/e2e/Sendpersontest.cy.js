describe('Send information', () => {
 
  // Visit the page before each test
  

it('Subscibe form', () => {
  cy.visit('/sendperson');
  cy.get('[data-test = "person-subscribe-name"]').find('input').type('ชมพู่')
  cy.get('[data-test = "person-subscribe-detail"]').find('input').type('แซงคิวซื้อยำยูป้า')
  cy.get('[data-test = "person-subscribe-coverimage"]').find('input').type('pp')
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