const testIds = {
  emailFiled: 'input-email',
  passwordField: 'input-password',
  signinBtn: 'btn-signin',
  formError: 'form-error'
};

describe('User can login', () => {
  context('given valid credentials', () => {
    it('does not display error', () => {
      cy.visit('/login');
      cy.mockLoginResponse(200, 'login/valid.json');

      cy.findByTestId(testIds.emailFiled).type(Cypress.env('CYPRESS_LOGIN_EMAIL'));
      cy.findByTestId(testIds.passwordField).type(Cypress.env('CYPRESS_LOGIN_PASSWORD'));
      cy.findByTestId(testIds.signinBtn).click();

      cy.get('[role="alert"]').should('not.exist');
    });

    it('adds authentication token to local storage', () => {
      cy.visit('/login');
      cy.mockLoginResponse(200, 'login/valid.json');

      cy.findByTestId(testIds.emailFiled).type(Cypress.env('CYPRESS_LOGIN_EMAIL'));
      cy.findByTestId(testIds.passwordField).type(Cypress.env('CYPRESS_LOGIN_PASSWORD'));
      cy.findByTestId(testIds.signinBtn)
        .click()
        .should(() => {
          expect(localStorage.getItem('access_token')).to.eq('access-token');
          expect(localStorage.getItem('refresh_token')).to.eq('refresh-token');
          expect(localStorage.getItem('token_type')).to.eq('Bearer');
          expect(localStorage.getItem('expires_in')).to.eq('7200');
        });
    });

    it('redirects to home page', () => {
      cy.visit('/login');
      cy.mockLoginResponse(200, 'login/valid.json');

      cy.findByTestId(testIds.emailFiled).type(Cypress.env('CYPRESS_LOGIN_EMAIL'));
      cy.findByTestId(testIds.passwordField).type(Cypress.env('CYPRESS_LOGIN_PASSWORD'));
      cy.findByTestId(testIds.signinBtn).click();

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/');
      });
    });
  });
});
