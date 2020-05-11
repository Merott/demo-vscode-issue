/// <reference types="cypress" />

describe('courses page', () => {
  beforeEach('load /courses', () => {
    cy.visit('/courses');
  });

  it('displays list of courses', () => {
    cy.get('h2').should('exist').and('have.length.greaterThan', 0);
  });
});
