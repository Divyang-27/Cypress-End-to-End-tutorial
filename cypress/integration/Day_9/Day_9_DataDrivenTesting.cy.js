

describe('Orange HRM - Data Driven Testing', () => {
    it('Validates login with multiple credentials', () => {
        let results = []; // Array to store results
        // fixture command use to fetch the data, access the data
        cy.fixture("userCred.json").then((data) => {
            data.users.forEach((user, index) => { // foreach is getting used to loop through my data
                cy.log(`Testing user: ${user.username}`);

                cy.login(user); // Custom command to log in

                cy.url().then((currentUrl) => {
                    let tcResult = currentUrl.includes('dashboard') ? "Pass" : "Fail";

                    if (tcResult === "Pass") {
                        cy.logout(); // Logout if login is successful
                    } else {
                        cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
                    }

                    results.push({ user: user.username, result: tcResult }); // Store result in array
                    cy.log(`Test Case ${index + 1}: ${tcResult}`);
                });
            });
        });
    });
});
