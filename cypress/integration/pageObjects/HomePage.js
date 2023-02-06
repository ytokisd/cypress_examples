class HomePage
{
    // create some method to use the cypress command inside. it is done to reduce maintenance. e.g.:
    // if there are a lot of imputs like "input[name='name']:nth-child(2)", you call them all like getEditBox
    // if locator path is changed you will have to change it only here, but not in all your tests
    getEditBox() {
        return cy.get("input[name='name']:nth-child(2)")
    }

    getTwoWayDataBinding() { // same logic as above
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender() {//same
        return cy.get("select")
    }

    getEnterprenureRadioButton() {
        return  cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;