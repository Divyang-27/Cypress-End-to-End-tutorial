import Login from "../../support/PageObject/Login";
import Product from "../../support/PageObject/product";
import Cart from "../../support/PageObject/cart";
import Checkoutone from "../../support/PageObject/checkoutOne";
import CheckoutTwo from "../../support/PageObject/checkoutTwo";
import Order from "../../support/PageObject/order";

/**
 * Test steps:
 * * Login to the website with the valid credential
 * * Go to the homepage
 * * Add one product to cart
 * * Go to cart--> checkout
 * * Go to Checkout page 1- fill the details
 * * Go to Checkout page -Click on finish
 * * Go to the success -order page
 * * Go to Home screen
 * * Logout
 *
 */
describe('Page object model Implementation', () => {
    const loginPage = new Login();
    const productPage= new Product();
    const cartPage= new Cart();
    const checkoutOnePage= new Checkoutone();
    const checkoutTwoPage= new CheckoutTwo();
    const orderPage= new Order();
    
    before(() => {
        const url = "https://www.saucedemo.com/";
        cy.visit(url);
    });
    
    it('End to end product buying', () => {

        loginPage.login();
        productPage.addToCart();
        productPage.goToCart();
        cartPage.cartCheckout();
        checkoutOnePage.fillYourInfo()
        checkoutTwoPage.finish()
        orderPage.verifySuccess()
        orderPage.goBackHome()
    });
    after(()=>{     
        productPage.logout();
    })
});

