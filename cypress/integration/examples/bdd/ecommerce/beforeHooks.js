beforeEach(function() {
    //runs before all test in block
    cy.fixture("example").then(function(data){ //don't use (data) =>, something is not supportet in Mocha
        this.data = data 

    }   )

}   )