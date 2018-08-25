describe('Silly Router - Links', () => {
  it('Home page', () => {
    cy.visit('http://localhost:3000/404/');
    cy.get('#navigate .route-home button').click();
    cy.get('#page-name').contains('Home');
    cy.url().should('equal', 'http://localhost:3000/');
  });

  it('User page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#navigate .route-user-73 button').click();
    cy.get('#page-name').contains('User');
    cy.get('#user-id').contains(73);
    cy.url().should('equal', 'http://localhost:3000/user/73');
  });

  it('New user page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#navigate .route-user-new button').click();
    cy.get('#page-name').contains('New User');
    cy.get('#user-type').should('be.empty');
    cy.url().should('equal', 'http://localhost:3000/new-user');
  });

  it('New user page with type', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#navigate .route-user-new-admin button').click();
    cy.get('#page-name').contains('New User');
    cy.get('#user-type').contains('admin');
    cy.url().should('equal', 'http://localhost:3000/new-user/admin');
  });

  it('Missing route parameter', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#navigate .route-missing-param button').click();
    cy.get('#page-name').contains('User');
    cy.get('#user-id').contains('null');
    cy.url().should('equal', 'http://localhost:3000/user/null');
  });

  it('Explicit', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#navigate .route-explicit button').click();
    cy.get('#page-name').contains('Catch All');
    cy.url().should('equal', 'http://localhost:3000/explicit');
  });

  it('Hash', () => {
    cy.visit('http://localhost:3000/new-user');
    cy.get('#navigate .route-hash button').click();
    cy.get('#page-name').contains('New User');
    cy.url().should('equal', 'http://localhost:3000/new-user#hash');
  });
});
