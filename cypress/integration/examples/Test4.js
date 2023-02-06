describe('My second test suite', function()
{ 
    it('My First test case', function() { 
        ///Handling browser alerts
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#alertbtn").click() //finding element by ID, simple alert with 1 confirm button is automatically confirmed
        cy.get('input[value="Confirm"]').click() // find element by custom CSS. Allert with 2 buttons Accept and Cancel buttons is also autoconfirmed

        cy.on('window:alert',// to work with popup content (like validate text): 1) fire cy.on
        //first rgument is a browser event. in this case - window:alert
         (str) => {//second argument is what captured by event. In this case we capture string, and then we do promise
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
         } ) // this code will not trigger if alert is not pop up during test

         cy.on('window:confirm',// to work with popup content (like validate text): 1) fire cy.on
         //first rgument is a browser event. in this case - window:confirm
          (str) => {//second argument is what captured by event. In this case we capture string, and then we do promise
             expect(str).to.equal("Hello , Are you sure you want to confirm?")
          } ) // this code will not trigger if alert is not pop up during test


          ///TABS - Cypress does not handle switch to another tab so what can be done is delete target attribute
          /// from the element, so page will open in same tab
          cy.get('#opentab').invoke('removeAttr','target').click() // invoke is cypress function, removeAttr - Jquerry

          cy.url().should('include', 'https://www.rahulshettyacademy.com/') // Validate the URL
          cy.go('back') //this command returns you to previous page
        }   )

}   )