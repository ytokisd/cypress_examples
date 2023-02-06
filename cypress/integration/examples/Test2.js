describe('My second test suite', function()
{ 
    it('My First test case', function() { 
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/") 
        cy.get('.search-keyword') 
        .type('ca') 
        cy.get('.products').as('productsLocator') ///assigning name to search criteria as alias, sort of value name
        cy.wait(5000) 
        cy.get('@productsLocator').find('.product') //productsLocator
        
        .each(($e1, index, $list) => {
            const textVeg = $e1.find('h4.product-name').text()
            if (textVeg.includes("Cashews")) {
                cy.wrap($e1).find('button').click() 

            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


    }   )

}   )