import LoginPage from '../../pages/LoginPage';

describe('Cart and Checkout Functionality', () => {
  const loginPage = new LoginPage();

  beforeEach(function() {
    // Load the fixture data
    cy.fixture('login').then((loginData) => {
      this.loginData = loginData;
      
      // Perform login after the data is loaded
      loginPage.visit();
      cy.get('[data-test="username"]').type(this.loginData.standardUser.username);
      cy.get('[data-test="password"]').type(this.loginData.standardUser.password);
      cy.get('#login-button').click();
    });
  });

  it('should add an item to the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  it('should remove an item from the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.btn_secondary').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('should complete the checkout flow', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.checkout_button').click();

    // Fill out checkout information
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('.cart_button').click();

    // Verify order summary and complete purchase
    cy.get('.summary_subtotal_label').should('contain', '$');
    cy.get('.summary_tax_label').should('contain', '$');
    cy.get('.summary_total_label').should('contain', '$');
    cy.get('.cart_button').click();

    // Verify successful purchase
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });
});
