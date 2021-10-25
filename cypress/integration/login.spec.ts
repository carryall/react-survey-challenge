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

    // TODO: Complete these test cases
    it.skip('adds authentication token to local storage');
    it.skip('redirects to home page');
  });
});
