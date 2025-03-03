// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom commands the commands created by ourself

const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

Cypress.Commands.add("login", (user) => {
    cy.visit(url);
    cy.get("input[name='username']").type(user.username);
    cy.get("input[name='password']").type(user.password);
    cy.get('.oxd-button').click();
    cy.wait(3000);
});

Cypress.Commands.add("logout", () => {
    cy.get('.oxd-userdropdown-tab').click();
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    cy.wait(3000);
});
