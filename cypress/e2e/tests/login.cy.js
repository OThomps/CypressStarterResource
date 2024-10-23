import LoginPage from '../../pages/LoginPage';

describe('Login Functionality', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.fixture('login').then(function (loginData) {
      this.loginData = loginData;
    });
  });

  it('should login successfully with valid credentials', function () {
    loginPage.visit();
    loginPage.login(this.loginData.standardUser.username, this.loginData.standardUser.password);
    loginPage.verifySuccessfulLogin();
  });

  it('should display error message with invalid credentials', function () {
    loginPage.visit();
    loginPage.login(this.loginData.invalidUser.username, this.loginData.invalidUser.password);
    loginPage.verifyFailedLogin();
  });

  it('should logout successfully', function () {
    loginPage.visit();
    loginPage.login(this.loginData.standardUser.username, this.loginData.standardUser.password);
    loginPage.logout();
    loginPage.verifySuccessfulLogout();
  });
});
