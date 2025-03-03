const url="https://demo.opencart.com/"

describe('Navigation', () => {
    it('Navigation', () => {
        cy.visit(url)
        // cy.go forward back , -1
        cy.contains("Phones & PDAs").click()
        cy.go('back')
        cy.contains("Tablets").click()
        cy.go(-1) // back == -1
        cy.go("forward")
        cy.reload()
        // go back
        // go forward
        // reload
        // cy.url().includes('tablet')
    });
});
