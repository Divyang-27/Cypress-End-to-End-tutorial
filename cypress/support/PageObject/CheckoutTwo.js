class CheckoutTwo {
    cancel() {
        cy.contains('Cancel').click()
    }

    finish() {
        cy.get('[data-test="finish"]').click();
    }
}

export default CheckoutTwo;
