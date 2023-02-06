describe('My second test suite', function()
{ 
    it('My First test case', function() { 
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        ///////CHECKBOXES
        cy.get('#checkBoxOption1') // finding element on page by ID
        .check() //metod to check the checkbox, but also can use .click()
        .should('be.checked') // assertion to check the behavior. Always use 'be.' for it
        .and('have.value', 'option1') // then you have multiple assertions use should().and(), not should().should()
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked') //Unchecking checkbox and verifying it is unchecked
        cy.get('input[type="checkbox"]').check(['option2', 'option3']) // first find all all elements by common locator, then pass values of specific ones to make check

        ///STATIC DROPDOWNS
        cy.get('select').select('option2')// first select dropdown by value, then select dropdown element by html value or simply text
        .should('have.value', 'option2')

                /// DYNAMIC DROPDOWNS
                cy.get('#autocomplete').type('ind') // First get the dropdown element, then type text into it
                cy.get('.ui-menu-item div') // going throgh parent class to child to find comon element, in this case - div
                .each(($e1, index, $list) => { //// here we iteraterate matched elements as below:
                    $e1.text() /// We take element text
                    if ($e1.text()=== 'India') { // we compare it to condition
                        cy.wrap($e1).click()  //when condition is matched we click element
        
                    }
                })
                /////////////////
                cy.get('#displayed-text').should('be.visible') /// geting element and checking it is visible
                cy.get('#hide-textbox').click() // get element and click
                cy.get('#displayed-text').should('not.be.visible') //geting element and checking it is not visible
                cy.get('#show-textbox').click() // get element and click
                cy.get('#displayed-text').should('be.visible') // checking that element is visible

                /// RADIO BUTTONS
                cy.get('[value="radio2"]').check() //find element by value and check it
                .should('be.checked') // assertion to see if element is checked
    }   )

}   )