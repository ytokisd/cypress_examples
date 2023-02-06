import HomePage from "../../../pageObjects/HomePage"
import ProductsPage from "../../../pageObjects/ProductsPage"
import ChaeckoutPage from "../../../pageObjects/CheckoutPage"
import OrderPage from "../../../pageObjects/OrderPage"
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"; // /steps

const homePage = new HomePage()
const productsPage = new ProductsPage()
const checkoutPage = new ChaeckoutPage()
const orderPage = new OrderPage()
let name
let gender

Given("I open Ecommerce page", function() {
    cy.visit(Cypress.env('url') +'/angularpractice/' )
})

When("I add items to cart", function() {
    homePage.getShopTab().click()
            this.data.productName.forEach(function(element) { 
                cy.selectProduct(element)                
            });
            productsPage.getCheckoutButton().click()
})

When("Validate the total prices", () => { // this is "And" step in feature file, but still need to use When 
    cy.dontFuckWidMe()
    orderPage.getOrderCheckoutButton().click()
})

Then("select the country submit and verify Thankyou message", function() {
    checkoutPage.getCountryField().type(this.data.defaultCountry)
    checkoutPage.getCountryFromList().click()
    checkoutPage.getAgreementCheckbox().check({force:true})
    checkoutPage.getPurchaseButton().click()
    cy.validateSuccessText("Success")
});


When("I fill the form details", function(dataTable){ // using data from .feature, file, not from fixture
    name = dataTable.rawTable[1][0]
    gender = dataTable.rawTable[1][1]
    homePage.getEditBox().type(name) 
    homePage.getGender().select(gender)
})

Then("Validate form behavior", function() {
    name = dataTable.rawTable[1][0]
    homePage.getTwoWayDataBinding().should("have.value", name)
    homePage.getEditBox().should("have.attr", "minlength", "2") 
    homePage.getEnterprenureRadioButton().should("be.disabled")
})

Then("Select Shop page", function() {
    homePage.getShopTab().click()
})
/*import HomePage from "../../../pageObjects/HomePage"
import ProductsPage from "../../../pageObjects/ProductsPage"
import ChaeckoutPage from "../../../pageObjects/CheckoutPage"
import OrderPage from "../../../pageObjects/OrderPage"

describe('My first test suite', function()
    {   
        before(function() {
            //runs before all test in block
            cy.fixture("example").then(function(data){
                this.data = data 

            }   )

        }   )
    

        it('My First test case', function() { 
            Cypress.config('defaultCommandTimeout', 8000)
            const homePage = new HomePage()
            const productsPage = new ProductsPage()
            const checkoutPage = new ChaeckoutPage()
            const orderPage = new OrderPage()

            cy.visit(Cypress.env('url') +'/angularpractice/' )
            homePage.getEditBox().type(this.data.name) 
            homePage.getGender().select(this.data.gender)
            homePage.getTwoWayDataBinding().should("have.value", this.data.name)
            homePage.getEditBox().should("have.attr", "minlength", "2") 
            homePage.getEnterprenureRadioButton().should("be.disabled")
            homePage.getShopTab().click()
            this.data.productName.forEach(element => { 
                cy.selectProduct(element)                
            });
            productsPage.getCheckoutButton().click()
            cy.dontFuckWidMe()
            orderPage.getOrderCheckoutButton().click()
            checkoutPage.getCountryField().type(this.data.defaultCountry)
            checkoutPage.getCountryFromList().click()
            checkoutPage.getAgreementCheckbox().check({force:true})
            checkoutPage.getPurchaseButton().click()
            cy.validateSuccessText("Success")


    
    }   )
}   ) */