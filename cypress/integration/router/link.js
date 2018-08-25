describe('Silly Router - Navigate', () => {
  it('Home page', () => {
    cy.visit('http://localhost:3000/404/');
    cy.get('#link .route-home a').click();
    cy.get('#page-name').contains('Home');
    cy.url().should('equal', 'http://localhost:3000/');
  });

  it('User page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#link .route-user-73 a').click();
    cy.get('#page-name').contains('User');
    cy.get('#user-id').contains(73);
    cy.url().should('equal', 'http://localhost:3000/user/73');
  });

  it('New user page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#link .route-user-new a').click();
    cy.get('#page-name').contains('New User');
    cy.get('#user-type').should('be.empty');
    cy.url().should('equal', 'http://localhost:3000/new-user');
  });

  it('New user page with type', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#link .route-user-new-admin a').click();
    cy.get('#page-name').contains('New User');
    cy.get('#user-type').contains('admin');
    cy.url().should('equal', 'http://localhost:3000/new-user/admin');
  });

  it('Missing route parameter', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#link .route-missing-param a').click();
    cy.get('#page-name').contains('User');
    cy.get('#user-id').contains('null');
    cy.url().should('equal', 'http://localhost:3000/user/null');
  });

  it('Explicit', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#link .route-explicit a').click();
    cy.get('#page-name').contains('Catch All');
    cy.url().should('equal', 'http://localhost:3000/explicit');
  });

  it('Hash', () => {
    cy.visit('http://localhost:3000/new-user');
    cy.get('#link .route-hash a').click();
    cy.get('#page-name').contains('New User');
    cy.url().should('equal', 'http://localhost:3000/new-user#hash');
  });
});
