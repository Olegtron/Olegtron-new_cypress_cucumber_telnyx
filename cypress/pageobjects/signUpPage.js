
class signUpPage
{
    workEmailField() {
        return cy.get('#email').should('contain.value', "@gmail.com")
    }
    checkUrl() {
        return cy.url().should('eq', 'https://telnyx.com/sign-up')
    }
}

module.exports = new signUpPage();