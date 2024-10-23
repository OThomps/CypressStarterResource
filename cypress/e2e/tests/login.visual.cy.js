import LoginPage from '../../pages/LoginPage';

describe('Visual Regression Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.fixture('login').then(function (loginData) {
      this.loginData = loginData;
    });
  });

  it('should match login page snapshot', () => {
    cy.visit('/');
    cy.compareSnapshot('login-page');
  });

  it('should match inventory page snapshot after login', function () {
    loginPage.visit();
    loginPage.login(this.loginData.standardUser.username, this.loginData.standardUser.password);
    cy.compareSnapshot('inventory-page');
  });
});
