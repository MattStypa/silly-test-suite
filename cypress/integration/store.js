describe('Silly Store', () => {
  it('Passes props', () => {
    cy.visit('http://localhost:3000/store');
    cy.get('#header').contains('Welcome');
  });

  it('Sets store', () => {
    cy.visit('http://localhost:3000/store');
    cy.get('#first-name').contains('first name');
    cy.get('#last-name').should('be.empty');
    cy.get('#url').contains('url');
    cy.get('#set-first-name button').click();
    cy.get('#set-last-name button').click();
    cy.get('#set-url button').click();
    cy.get('#first-name').contains('Matt');
    cy.get('#last-name').should('be.empty');
    cy.get('#url').contains('mattstypa.com');
  });

  it('Renders only when necessery', () => {
    cy.visit('http://localhost:3000/store');
    cy.window().should('have.property', 'renderCount', 1);
    cy.get('#set-first-name button').click();
    cy.get('#set-last-name button').click();
    cy.get('#set-url button').click();
    cy.window().should('have.property', 'renderCount', 3);
    cy.get('#set-first-name button').click();
    cy.get('#set-last-name button').click();
    cy.get('#set-url button').click();
    cy.window().should('have.property', 'renderCount', 3);
  });
});
