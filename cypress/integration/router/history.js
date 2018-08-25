describe('Silly Router - History', () => {
  it('Does not push onto history if the route does not change', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#link .route-user-new a').click();
    cy.get('#link .route-user-new a').click();
    cy.get('#link .route-user-new a').click();
    cy.go('back');
    cy.get('#page-name').contains('Home');
    cy.url().should('equal', 'http://localhost:3000/');
    cy.go('forward');
    cy.get('#page-name').contains('New User');
    cy.url().should('equal', 'http://localhost:3000/new-user');
  });
});
