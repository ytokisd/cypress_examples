describe('My first test suite', function()
{ 
    it('My First test case', function() { 
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/") //access page
        cy.get('.search-keyword') //find an element on page by class
        .type('ca') // type something
        cy.wait(5000) //Wait for 5 seconds
        cy.get('.product:visible') //find VISIBLE ONLY element, now there are a lot of them
        .should('have.length', 4) // now to check condition, it says that total of 4 element have to be found
        cy.get('.products') //finding a wrapper class for bunch of child classes
        .find('.product') //search for elements inside given scope, this time specified by GET command 
        .should('have.length', 4) //assertion to check that there exactly 4 elements found

        cy.get('.products').find('.product') //finding parent class, then finding certain child(ren) in its scope
        .eq(2) // narrowing a scope of one specific element by its index
        .contains("ADD TO CART") // narrowing scope even more, search for element that has certain text
        .click() //perform click on element you found

        cy.get('.products').find('.product') // commented it before, just to mention - the result is array
        //////NOW BELOW THE HARD PART - ITERATION THROUGH SELECTED ARRAY
        .each(($e1, index, $list) => {
            const textVeg = $e1.find('h4.product-name').text() //finding element containing text
            if (textVeg.includes("Cashews")) {
                cy.wrap($e1).find('button').click() //another way to find element and click it. WRAP is used due to some internal bulshit but you have to wrap unknow elements to resolve them first

            }
        })
        //// Below is how to find elements text using promise and print it in logs. because you cannot do something like:
        //// const logo = cy.get('.brand'); cy.log(logo.text())
            cy.get('.brand').then(function(logoelement){
                cy.log(logoelement.text()) ////// storeed element in function and put its text to cypress logs
            } )

    }   )

}   )