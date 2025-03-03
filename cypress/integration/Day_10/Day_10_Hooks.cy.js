describe('Hooks in Cypress', () => {
    before(() => {
      cy.log('Runs once before all tests');
    });
  
    beforeEach(() => {
      cy.log('Runs before each test');
    });
  
    it('Test Case 1', () => {
      cy.log('Executing Test Case 1');
    });
  
    it('Test Case 2', () => {
      cy.log('Executing Test Case 2');
    });
  
    afterEach(() => {
      cy.log('Runs after each test');
    });
  
    after(() => {
      cy.log('Runs once after all tests');
    });
  });
  