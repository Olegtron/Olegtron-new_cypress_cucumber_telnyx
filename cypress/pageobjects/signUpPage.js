import commonPage from "./commonPage"

const email = '#email'
const signUpUrl = 'https://telnyx.com/sign-up'

class signUpPage
{
    workEmailField() {
        commonPage.getElement(email).should('contain.value', "@gmail.com")
    }
    checkUrl() {
        cy.url().should('eq', signUpUrl)
    }
}

module.exports = new signUpPage();