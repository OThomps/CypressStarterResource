class LoginPage {
    visit() {
      cy.visit('/');
    }
  
    login(username, password) {
        cy.get('[data-test="username"]').type(username);
      cy.get('[data-test="password"]').type(password);
      cy.get('#login-button').click();
    }
  
    verifySuccessfulLogin() {
        //welcome message or related identifier
        cy.get('[data-test="title"]').should('be.visible').and('include.text', 'Products');
    }
  
    verifyFailedLogin() {
        //error message or related identifier
        cy.get('[data-test="error"]').should('be.visible').and('include.text', 'Sorry, this user has been locked out');
    }
  
    logout() {
        //Logout button
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link')
        .should('be.visible')
        .click();              
    }
  
    verifySuccessfulLogout() {
        //Log In button
        cy.get('[data-test="login-button"]').should('be.visible');
    }

    navigateToInventory() {
      cy.visit('/inventory.html');
    }
  }
  
  export default LoginPage;
