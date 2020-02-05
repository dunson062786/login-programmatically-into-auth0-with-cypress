describe('login', () => {
    it('should successfully log into our app', () => {
        cy.login(Cypress.env('auth_username'), Cypress.env("auth_password"))
          .then(() => {
              // currently this fails
              cy.get('button').contains('Log out')
          })
    })
});