class Checkoutone {
    fillYourInfo() {
        cy.get('[data-test="firstName"]').type("Divyang");
        cy.get('[data-test="lastName"]').type("Chhelavda");
        cy.get('[data-test="postalCode"]').type("0987689");
        cy.contains('Continue').click()
    }
}

export default Checkoutone;
