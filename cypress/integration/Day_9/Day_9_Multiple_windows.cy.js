const url = "https://the-internet.herokuapp.com/windows"

describe('Windows', () => {
    it('Windows testing', () => {
        cy.visit(url)
        cy.wait(2000)
        
        cy.get('a[href="/windows/new"]').invoke('removeAttr', 'target').click()
        
        // invoke
        // it will remove the attribute target
        // to open the new window in the same window
        
        cy.url().should('include', '/windows/new')
        cy.get('h3').should('have.text', 'New Window')
    });
});
