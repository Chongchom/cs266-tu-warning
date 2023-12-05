describe('login', () => {
  it('login incorrect password', () => {
    cy.visit('/');
    cy.get('[data-test = "login-username"]').find('input').type('6409650055')
    cy.get('[data-test = "login-password"]').find('input').type('Chom@020447')
    cy.get('[data-test = "login-submit-button"]').click()
    cy.get("h2#swal2-title.swal2-title").contains(/Password Invalid!/)
    cy.get("button.swal2-confirm.swal2-styled").click()
    cy.url().should('eq', 'http://localhost:3000/');
    
  })

  it('login incorrect username', () => {
    cy.visit('/');
    cy.get('[data-test = "login-username"]').find('input').type('6409650056')
    cy.get('[data-test = "login-password"]').find('input').type('Chom@020446')
    cy.get('[data-test = "login-submit-button"]').click()
    cy.get("h2#swal2-title.swal2-title").contains(/Users or Password Invalid!/)
    cy.get("button.swal2-confirm.swal2-styled").click()
    cy.url().should('eq', 'http://localhost:3000/');
    
  })

  it('login empty username', () => {
    cy.visit('/');
    cy.get('[data-test = "login-password"]').find('input').type('Chom@020446')
    cy.get('[data-test = "login-submit-button"]').click()
    cy.get("button.swal2-confirm.swal2-styled").click()
    cy.url().should('eq', 'http://localhost:3000/');
    
  })

  it('login empty password', () => {
    cy.visit('/');
    cy.get('[data-test = "login-username"]').find('input').type('6409650056')
    cy.get('[data-test = "login-submit-button"]').click()
    cy.get("button.swal2-confirm.swal2-styled").click()
    cy.url().should('eq', 'http://localhost:3000/');
    
  })

  it('login empty username and password', () => {
    cy.visit('/');
    cy.get('[data-test = "login-submit-button"]').click()
    cy.get("button.swal2-confirm.swal2-styled").click()
    cy.url().should('eq', 'http://localhost:3000/');
    
  })

  it('login correct username and password', () => {
    cy.visit('/');
    cy.get('[data-test = "login-username"]').find('input').type('6409650055')
    cy.get('[data-test = "login-password"]').find('input').type('Chom@020446')
    cy.get('[data-test = "login-submit-button"]').click()
    cy.get("h2#swal2-title.swal2-title").contains(/Success/)
    cy.get("button.swal2-confirm.swal2-styled").click()
    cy.get("h2#swal2-title.swal2-title").contains(/success/)
    cy.get("button.swal2-confirm.swal2-styled").click()
    cy.url().should('eq', 'http://localhost:3000/home');
    
  })
})