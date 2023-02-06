describe("Mock http response test", function() {

    it("mocks the http requests", function() {
        
        cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
            "name": "somename",
            "isbn": "sdf",
            "aisle": "ssxx",
            "author": "John foe"
        }).then(function(response) {
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })
            })

})