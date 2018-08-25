describe('Silly Router - Cold Loads', () => {
  it('Home page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#page-name').contains('Home');
  });

  it('User page', () => {
    cy.visit('http://localhost:3000/user/22');
    cy.get('#page-name').contains('User');
    cy.get('#user-id').contains(22);
  });

  it('New user page', () => {
    cy.visit('http://localhost:3000/new-user/');
    cy.get('#page-name').contains('New User');
    cy.get('#user-type').should('be.empty');
  });

  it('New user page with type', () => {
    cy.visit('http://localhost:3000/new-user/admin');
    cy.get('#page-name').contains('New User');
    cy.get('#user-type').contains('admin');
  });

  it('Catch all page', () => {
    cy.visit('http://localhost:3000/404/');
    cy.get('#page-name').contains('Catch All');
  });
});
