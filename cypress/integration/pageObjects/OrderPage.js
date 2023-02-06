class OrderPage {

    getOrderCheckoutButton() {
        return cy.get('button').contains('Checkout')
     }

     getSumPlaceholder() {
        return cy.get('h3 strong')
     }

}

export default OrderPage;