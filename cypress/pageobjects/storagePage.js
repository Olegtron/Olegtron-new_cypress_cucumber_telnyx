const random = Math.random().toString(36).substring(4,14)

class storagePage
{
    //Buttons
    joinButton() {
        cy.get('div.sc-31a8cefb-10.jnwLUb > div > a').click()
    }
    applyNowButton() {
        cy.get('#mktoForm_2272 > div.mktoButtonRow > span > button').click()
    }
    //Input
    firstNameField() {
        return cy.get('#FirstName').type(random)
    }
    lastNameField() {
        return cy.get('#LastName').type(random)
    }
    emailFieldNotValid() {
        return cy.get('#Email').type(random)
    }
    emailFieldValid() {
        return cy.get('#Email').type(random+"@gmail.com")
    }
    //Notifications
    emailNotificationError() {
        cy.get('div.mktoFieldWrap.mktoRequiredField > div.mktoError').should('contain.text', "Must be valid email. example@yourdomain.com")
    }
}

module.exports = new storagePage();