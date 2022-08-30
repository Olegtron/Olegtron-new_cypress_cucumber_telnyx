import commonPage from "./commonPage"

const firstName = '#FirstName'
const lastName = '#LastName'
const email = '#Email'
const waitlistUrl = 'https://telnyx.com/products/storage-waitlist'
const confirmText = 'main>div>div>div>h1>span'

class confirmationPage
{
    firstNameField() {
        commonPage.getElement(firstName)
    }
    lastNameField() {
        commonPage.getElement(lastName)
    }
    emailField() {
        commonPage.getElement(email)
    }
    urlCheck() {
        cy.url().should('eq', waitlistUrl)
    }
    confirmationText() {
        commonPage.getElement(confirmText).should('contain.text', "You're on the waitlist!")
    }
}

module.exports = new confirmationPage();