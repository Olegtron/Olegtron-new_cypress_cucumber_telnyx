class confirmationPage
{
    joinButton() {
        cy.get('div.sc-31a8cefb-10.jnwLUb > div > a').click()
    }
    firstNameField() {
        return cy.get('#FirstName')
    }
    lastNameField() {
        return cy.get('#LastName')
    }
    emailField() {
        return cy.get('#Email')
    }
    applyNowButton() {
        cy.get('#mktoForm_2272 > div.mktoButtonRow > span > button').click()
    }
    urlCheck() {
        cy.url().should('eq', 'https://telnyx.com/products/storage-waitlist')
    }
    confirmationText() {
        cy.get('div.sc-31a8cefb-9.iDgrXI > h1 > span').should('contain.text', "You're on the waitlist!")
    }
}

module.exports = new confirmationPage();