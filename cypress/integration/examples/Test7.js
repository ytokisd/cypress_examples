describe('My first test suite', function()
{  // Open child window or tab
    it('My First test case', function() { 
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el){ // Because prop is not cypres method, we must initiate jquery this way
            const url = el.prop('href') //get href value of element
            cy.visit(url) // DO NOT WORK USE SOLUTION FROM TEST 7
        
            } )

    }   )
}   )