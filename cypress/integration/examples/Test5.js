describe('My first test suite', function()
{ 
    it('My First test case', function() { 
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //TABLES
        cy.get('tr td:nth-child(2)').each(($e1, index, $list)  => { // td:nth-child(2) - selects second rows of all tables
            const text = ($e1).text()
            if(text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index) //with index we getting exact same row on which iteraton stopped
                // and then work with that row
                .next() //getting next child (sibling) of parent class. E.g: Here we found a book by 
                //text included in it's text and move to next item in row (td) which is price
                .then(function(price)  { // as it is Jquerry object we must use .then to resolve it's value 
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })

            }
        } )
            } )

    }   )

