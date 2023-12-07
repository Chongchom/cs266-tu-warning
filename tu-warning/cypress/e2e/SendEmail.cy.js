describe('Send Email', () => {
  it('login correct Send Email', () => {
    cy.visit('/');
    cy.get('[data-test = "login-username"]').find('input').type('6409650055')
    cy.get('[data-test = "login-password"]').find('input').type('Chom@020446')
    cy.get('[data-test = "login-submit-button"]').click()
    cy.get("h2#swal2-title.swal2-title").contains(/Success/)
    cy.get("button.swal2-confirm.swal2-styled").click()
    cy.get("h2#swal2-title.swal2-title").contains(/Email successfully sent, check inbox/)
  })
})