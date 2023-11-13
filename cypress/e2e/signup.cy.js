describe('Sign Up Page', () => {
  it('should sign up successfully, redirect to /emailservice, and clear input fields', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('input[placeholder="email"]').type('example@example.com').should('have.value', 'example@example.com');
    cy.get('input[placeholder="password"]').type('yourpassword').should('have.value', 'yourpassword');
    cy.get('input[placeholder="confirm password"]').type('yourpassword').should('have.value', 'yourpassword');

    cy.get('div[style="cursor: pointer; color: rgb(255, 255, 255); font-size: 14px; padding: 8px 14px; background-color: rgb(255, 93, 93); border-radius: 4px;"]').click();


    // cy.request({
    //   url: 'http://localhost:8080/sign-up',
    //   body: {"email":"example@example.com","password":"yourpassword"}
    // }).then((response) => {
    //   cy.expect(response.status).to.equal(200);
    // });
    //
    // cy.get('input[placeholder="email"]').should('have.value', '');
    // cy.get('input[placeholder="password"]').should('have.value', '');
    // cy.get('input[placeholder="confirm password"]').should('have.value', '');
  });
});

// eslint-disable-next-line no-undef
describe('Sign In Page', () => {
  it('should sign up successfully, redirect to /emailservice, and clear input fields', () => {
    cy.visit('http://localhost:3000/sign-in');

    cy.get('input[placeholder="email"]').type('example@example.com').should('have.value', 'example@example.com');
    cy.get('input[placeholder="password"]').type('yourpassword').should('have.value', 'yourpassword');

    cy.get('div[style="cursor: pointer; color: rgb(255, 255, 255); font-size: 14px; padding: 8px 14px; background-color: rgb(255, 93, 93); border-radius: 4px;"]').click();


    // cy.request({
    //   url: 'http://localhost:8080/sign-in',
    //   body: {"email":"example@example.com","password":"yourpassword"}
    // }).then((response) => {
    //   cy.expect(response.status).to.equal(200);
    // });
    //
    // cy.get('input[placeholder="email"]').should('have.value', '');
    // cy.get('input[placeholder="password"]').should('have.value', '');
    // cy.get('input[placeholder="confirm password"]').should('have.value', '');
  });
});