const url = "https://rahulshettyacademy.com/AutomationPractice/"

describe('Iframe', () => {
    it('iframe test', () => {
        cy.visit(url)
        cy.frameLoaded("#courses-iframe") // wait for iframe
        cy.wait(3000) // hard coded wait
        
        cy.iframe().find("a[href='mentorship']").eq(0).click()
        cy.wait(3000)
        
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)  
        // i am asserting that the tags with pricing title class should be 2 in the iframe
        // There should be two courses
        
        cy.wait(3000)
    });
});
