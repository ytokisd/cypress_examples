import HomePage from "../pageObjects/HomePage" //Importing page class to test
import ProductsPage from "../pageObjects/ProductsPage"
import ChaeckoutPage from "../pageObjects/CheckoutPage"
import OrderPage from "../pageObjects/OrderPage"

// to start test from terminal do: npx cypress run --spec mySpec
// to run it with variables from cypress.config.js do:
// npx cypress run --spec mySpec --env url= "myUrl"
// this tests will run behaded (browser will not be opened)
// to run tests in specific brovser use --headed --browser theBrowser

describe('My first test suite', function()
    {   
        before(function() {
            //runs before all test in block
            cy.fixture("example").then(function(data){ // resolve promise to access data that fixture returns
                this.data = data // making global variable of data which can be used everywhere in class

            }   )

        }   )
    

        it('My First test case', function() { 
            Cypress.config('defaultCommandTimeout', 8000)
            const homePage = new HomePage() // creating object of page object class to use it in the test
            const productsPage = new ProductsPage()
            const checkoutPage = new ChaeckoutPage()
            const orderPage = new OrderPage()

            cy.visit(Cypress.env('url') +'/angularpractice/' )
           // cy.visit("https://rahulshettyacademy.com/angularpractice/")
            homePage.getEditBox().type(this.data.name) //using method from HomePage and using data from fixture
            homePage.getGender().select(this.data.gender)
            homePage.getTwoWayDataBinding().should("have.value", this.data.name)
            homePage.getEditBox().should("have.attr", "minlength", "2") // check that there is attribute minlength and it equals 2
            homePage.getEnterprenureRadioButton().should("be.disabled")
            // cy.pause() // use to pause test for debugging purposes
            homePage.getShopTab().click()
            //cy.selectProduct('Blackberry') //custom command created in support/commands.js
            //cy.selectProduct('Nokia Edge')
            this.data.productName.forEach(element => { // iterate throug productName (value in example.js), send each value
                //to custom command (in support/commands.js) therefore reuse code instead of writing it multiple times
                cy.selectProduct(element)                
            });
            productsPage.getCheckoutButton().click()
            cy.dontFuckWidMe()
            orderPage.getOrderCheckoutButton().click()
            checkoutPage.getCountryField().type(this.data.defaultCountry)
            checkoutPage.getCountryFromList().click()
            checkoutPage.getAgreementCheckbox().check({force:true})
            checkoutPage.getPurchaseButton().click()
            //checkoutPage.getSuccessMessage().should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
            cy.validateSuccessText("Success")


    
    }   )
}   )