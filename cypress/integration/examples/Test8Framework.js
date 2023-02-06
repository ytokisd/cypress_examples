describe('My first test suite', function()
    {   
        before(function() {
            //runs before all test in block
            cy.fixture("example").then(function(data){ // resolve promise to access data that fixture returns
                this.data = data // making global variable of data which can be used everywhere in class

            }   )

        }   )
    

        it('My First test case', function() { 
            cy.visit("https://rahulshettyacademy.com/angularpractice/")
            cy.get("input[name='name']:nth-child(2)").type(this.data.name) //using data from fixture
            cy.get("select").select(this.data.gender)
            cy.get(':nth-child(4) > .ng-untouched').should("have.value", this.data.name)
            cy.get("input[name='name']:nth-child(2)").should("have.attr", "minlength", "2") // check that there is attribute minlength and it equals 2
            cy.get('#inlineRadio3').should("be.disabled")
            cy.get(':nth-child(2) > .nav-link').click()
            //cy.selectProduct('Blackberry') //custom command created in support/commands.js
            //cy.selectProduct('Nokia Edge')
            this.data.productName.forEach(element => {
                cy.selectProduct(element)                
            });

    
    }   )
}   )