/// <reference types = "cypress"/>
const neatCSV = require('neat-csv')
let productText
describe("Mock http response test", function() {

    it("mocks the http requests", function() {
        cy.login().then(function() {
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad : function(window) {
                    window.localStorage.setItem("token", Cypress.env("token"))
                }
            })

        })

        cy.get('.card-body b').eq(1).then(function(el) {
            productText = el.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click() //find multiple items, click on second (index is 1)
        cy.get('[routerlink*="cart"]').click()
        cy.contains('Checkout').click()
        cy.get('[placeholder*="Country"]').type('ind')
        cy.get('.ta-results button').each( ($element, index,list) => {

            if($element.text() === " India") {
                cy.wrap($element).click() // dont forget to wrap
            }
        })
            cy.contains("Place Order").click({force:true})
            
        


        //cy.contains("Place Order").click({force:true})
        cy.wait(2000)

        cy.contains("Click To Download Order Details in CSV").click()

        const basePath = Cypress.config('fileServerFolder')
        cy.readFile(basePath + '\\cypress\\downloads\\order-invoice_ytokisd.csv')
        .then(async function(text) {
            const csv = await neatCSV(text)
            console.log(csv)
            const actualProduct = csv[0]["Product Name"] // because there is " " in property name. If there was no space, then: csv[0].ProductName
            expect(productText).to.equal(actualProduct)
        })
        

    })

})