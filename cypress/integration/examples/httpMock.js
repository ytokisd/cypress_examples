describe("Mock http response test", function() {

    it("mocks the http requests", function() {
        //({requestobject}, {responseobject})
        cy.intercept({
            method : "GET",
            url : "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },

        {
            statusCode : 200,
            body : [{"book_name":"Rahul Shetty Test","isbn":"SPY40","aisle":"2529857"}]
        }).as("bookRetrievals")

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.get("button[class='btn btn-primary']").click()
        //cy.wait('@bookRetrievals') //wait untill mock request triggered and response data resolved
        cy.wait('@bookRetrievals').then(({request, response}) =>

        {   
            cy.get('tr').should('have.length', response.body.length + 1) // +1 because there is also header row which is also tr
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})