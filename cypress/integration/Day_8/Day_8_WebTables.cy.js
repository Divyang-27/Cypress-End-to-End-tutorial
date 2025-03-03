const url = "https://www.tutorialspoint.com/selenium/practice/webtables.php"

describe('web table', () => {
    it('Web table testing', () => {
        cy.visit(url)

        cy.get('table > tbody > tr').each(($row) => {
            cy.wrap($row).should('be.visible')
        })

        cy.get('table tbody tr td:nth-child(2)').invoke('text').should('contain', 'Vega')

        // INVOKE will be used to invoke a method on the element
        // be visible confirms that that element is visible
        // .each to loop through the whole table
    });
});
