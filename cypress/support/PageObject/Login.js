class Login {
    login() {
      cy.get("input[data-test='username']").type("standard_user")
      cy.get("input[data-test='password']").type("secret_sauce")
      cy.get("input[data-test='login-button']").click()
      cy.url().should('include', "https://www.saucedemo.com/") // include
    }
  }
  
export default Login;
  