const mockLoginResponse = (statusCode: number, fixture: string): void => {
  cy.intercept('POST', '**/api/v1/oauth/token', (req) => {
    req.reply({
      statusCode: statusCode,
      fixture: fixture
    });
  });
};

Cypress.Commands.add('mockLoginResponse', mockLoginResponse);
