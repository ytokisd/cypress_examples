// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("selectProduct", (productName) => {
    cy.get("h4.card-title").each(($el, index, $list)  => {
        if( $el.text().includes(productName)) {
         cy.get("button.btn.btn-info").eq(index).click()
        }
    
     })
})

Cypress.Commands.add('validateSuccessText', (text) => {
    cy.get('.alert').then(element => {
        const alertText = element.text()
        expect(alertText.includes(text)).to.be.true // .to.be.true - is from Chai library, for reference

    })
} )

Cypress.Commands.add("getAllPriceCells", () => {
    var sum = 0
    cy.get("tr td:nth-child(4) strong").each(($price, index, $list) => {
        const price =  $price.text()
        sum += Number((price.split(" ")[1].trim()))
    }).then(function() { 
        cy.log(sum)
        return cy.wrap(Number(sum))
    })
})

Cypress.Commands.add("returnNumber", (path) =>{
    cy.get(path).then(function(theText) {
        var number = theText.text().split(" ")[1].trim()
            cy.log(number)
            return cy.wrap(Number(number))  
    })
    
})

Cypress.Commands.add('dontFuckWidMe', () => {
    var sum = 0
    var number = 0
    cy.get("tr td:nth-child(4) strong").each(($price, index, $list) => {
        const price =  $price.text()
        sum += Number((price.split(" ")[1].trim()))
    }).then(function() { 
        cy.log(sum)
    }),

    cy.get("h3 strong").then(function(theText) {
        number = Number(theText.text().split(" ")[1].trim())
            cy.log(number)
              
    }).then(function() {
        expect(sum).to.be.equal(number)
    })

})

Cypress.Commands.add("login",()=>{
    // Request type, request url, request payload
    cy.visit('https://rahulshettyacademy.com/client/')
    cy.request('POST', "https://rahulshettyacademy.com/api/ecom/auth/login",
     {"userEmail":"ytokisd@gmail.com","userPassword":"BB@27wJfXG794Yz"})
     .then(function(response) {
        expect(response.status).to.eq(200)
        Cypress.env("token", response.body.token);
     })
})
    

