describe('login', () => {
    it('should successfully log into our app', () => {
        cy.login(Cypress.env('auth_username'), Cypress.env("auth_password"))
          .then(() => {
              // currently this fails
              cy.url().should('eq', 'http://localhost:3000/')
              cy.get('[data-testid=logout]').contains('Log out')
              cy.get('[href="/profile"]').click()
              cy.url().should('eq', 'http://localhost:3000/profile')
              cy.get('[href="/"]').click()
              cy.get('[data-testid=logout]').click()
              cy.url().should('eq', 'http://localhost:3000/')
          })
    })
});