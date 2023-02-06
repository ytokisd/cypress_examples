describe('My first test suite', function()
{ 
    it('My First test case', function() { 
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/") 
        cy.get('.search-keyword') 
        .type('ca') 
        cy.get('.products').as('productsLocator') ///assigning name to search criteria as alias, sort of value name
        cy.wait(5000) 
        cy.get('.product:visible') 
        .should('have.length', 4) 
        cy.get('@productsLocator') // productsLocator
        .find('.product') 
        .should('have.length', 4) 

        cy.get('@productsLocator').find('.product') // begin using alias with @
        .eq(2) 
        .contains("ADD TO CART") 
        .click() 

        cy.get('@productsLocator').find('.product') //productsLocator
        
        .each(($e1, index, $list) => {
            const textVeg = $e1.find('h4.product-name').text()
            if (textVeg.includes("Cashews")) {
                cy.wrap($e1).find('button').click() 

            }
        })
        cy.get('.brand').should('have.text', "GREENKART") //Assert if text is equals to expected
            cy.get('.brand').then(function(logoelement){
                cy.log(logoelement.text()) //////
            } )

    }   )

}   )