class passwordResetPage
{
    emailText() {
        return cy.get('div.PasswordReset__Container-cZiOJo.fvkrSU > form > div > label > div > div > input').type("kusoushimatta@gmail.com")
    }
    resetPassButton() {
        cy.get('div.PasswordReset__Container-cZiOJo.fvkrSU > form > div > div > button').click()
    }
    notificationText() {
        return cy.get('div.PasswordReset__MessageContainer-lfSQzT.jxgOqh > div > div > span > div > div').should('be.visible').should('contain', 'We have accepted your password reset request')
    }
}

module.exports = new passwordResetPage();
