const url="https://the-internet.herokuapp.com/javascript_alerts"

describe('alerts', () => {
    it('Handling Alerts with Cypress', () => {
      cy.on('window:alert', (text) => {
        expect(text).to.eq("I am a JS Alert"); // Verify alert text
      });
  
      
    });
    it('Handling Confirm Alert',()=>{
     cy.visit(url)
    // Handling a JavaScript Confirm Alert
      cy.get(':nth-child(2) > button').click(); // Click on the second alert button
  
      cy.on('window:confirm', (text) => {
        expect(text).to.eq("I am a JS Confirm"); // Verify confirm alert text
        return true; // Click 'OK' on the confirm alert
      });
  
      // Assertion to check if the result message is displayed correctly
      cy.get('#result').should('have.text', 'You clicked: Ok');
    })

    it('Handling JavaScript Prompt', () => {
        cy.visit(url); // Navigate to the test page
      
        // Stub the JavaScript prompt to return a custom message
        cy.window().then((windows) => {
          cy.stub(windows, 'prompt').returns('Masai Schools is great'); // Mocking prompt response
        });
      
        cy.get(":nth-child(3) > button").click(); // Click on the third button
      
        // Additional assertions can be included here to verify the prompt behavior
    });
  });

 