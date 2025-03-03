class Product {
    addToCart() {
        cy.get("button[data-test='add-to-cart-sauce-labs-backpack']").click();
    }
    goToCart() {
        cy.get('a[data-test="shopping-cart-link"]').click();
    }    
    logout() {
        cy.get('#react-burger-menu-btn').click();
        cy.contains('Logout').click();
    }
}

export default Product;
