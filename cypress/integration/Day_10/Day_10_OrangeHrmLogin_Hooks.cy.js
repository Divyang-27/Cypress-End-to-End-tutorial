const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
describe('ORANGE hrm testing', () => {
    before(() => { // before ALL
        cy.log("this is the start");
    });
    beforeEach('Login', () => { // in every it block it will login first
        cy.visit(url);
        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        cy.get('.oxd-button').click();
        cy.wait(3000);
    });
    it('Hrm Test 1-dashboard', () => {
        cy.url().should('include', 'dashboard');
    });
    it('Hrm Test 2-Performance', () => {
        cy.url().should('include', 'dashboard');
        cy.contains("Performance").click();
        cy.url().should('include', 'performance');
        cy.wait(3000);
    });

    it('Hrm Test 3-recruitment', () => {
        cy.url().should('include', 'dashboard');
        cy.contains("Recruitment").click();
        cy.url().should('include', 'recruitment');
        cy.wait(3000);
    });

    afterEach('Logout', () => {
        cy.get('.oxd-userdropdown-tab').click();
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
        cy.wait(3000);
    });
    after(() => { // before ALL
        cy.log("this is the end");
    });
});