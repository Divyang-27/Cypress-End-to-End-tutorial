import { Before, After, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

// Before--> BeforeEach

Given("The user is visiting the url", () => {
    cy.visit('https://the-internet.herokuapp.com/login')
});

When("The user us will enter the {word}", (username) => {
    cy.get('#username').type(username)
});

When("The user pw will enter the {word}", (password) => {
    cy.get('#password').type(password)
});


When("The user will click on login", () => {
    cy.contains(" Login").click();
});
  
When("The user will click on the logout", () => {
    cy.contains("Logout").click();
});
  
Then("The user logout is successful", () => {
    cy.url().should("include", "/login");
});
