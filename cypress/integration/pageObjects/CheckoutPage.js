class ChaeckoutPage {

    getCountryField() {
        return cy.get("#country")
    }

    getCountryFromList() {
        return cy.get(".suggestions").contains('India')
    }

    getAgreementCheckbox() {
        return cy.get("#checkbox2")
    }

    getPurchaseButton() {
        return cy.get('input[value="Purchase"]')
    }

    getSuccessMessage() {
        return cy.get('.alert')
    }


}

export default ChaeckoutPage;