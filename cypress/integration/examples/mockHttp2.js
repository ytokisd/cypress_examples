describe("Mock http response test", function() {

    it("mocks the http requests", function() {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept('GET', "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", (req) => {
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra" // here we intercept backend reques, modify it and send
            req.continue((res) => { //here we capture and validate response
                expect(res.statusCode).equal(403)
            })
        }).as("dummyrl")

        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyrl')

    })

})
