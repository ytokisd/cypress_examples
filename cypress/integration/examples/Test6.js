describe('My first test suite', function()
{ 
    it('My First test case', function() { 
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // MOUSE HOVER - Cypress does not support it but there is Jquerry workaround
        cy.get('.mouse-hover-content').invoke('show') //invoke is method to invoke Jquerry methods. Show will show all
        // hidden child elements. Note it is applied to immidiate child elements, not grandchild or anything
        cy.contains('Top').click() //Founding required element and click
        cy.url().should('include', 'top') //assertion. in this case 'top' was added to url so we check it
        // you can do .click({force: true}) if you don't care if element is visible hovered, it will click it anyway
        // example: yo don't want to check if mouse hover works, but just to click on element which appears after hover
        
            } )

    }   )