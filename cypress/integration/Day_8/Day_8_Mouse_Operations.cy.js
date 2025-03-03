const url="https://demo.opencart.com/index.php"

describe('Mouse Operations in Cypress', () => {

    it('Perform various mouse operations', () => {
        cy.visit(url)
        
        // Left click 
        // cy.get().click()
        
        // Right click
        // cy.get('.btn-secondary').rightclick()
        
        // Double click
        // cy.get('.btn-success').dblclick()
        
        // Assert double-click action
        // cy.get('#doublec').should('contain', 'You have Double clicked')

        // Mouseover action
        cy.contains("Components").trigger('mouseover');
    });
    it('Perform various mouse operations', () => {
        cy.visit(url)
    
        cy.contains("Blue Top").realHover()
        
        // realHover() handles mouseover effectively
        // events are not much effective
        // one is mouseover is not getting handled properly
        // Cypress runner fast execution is skipping to show the hidden element
    });
    

});
