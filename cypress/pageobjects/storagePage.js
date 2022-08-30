import commonPage from "./commonPage"

const random = Math.random().toString(36).substring(4,14)
const randomEmail = random+"@gmail.com"

const firstName = '#FirstName'
const lastName = '#LastName'
const email = '#Email'
const emailError = '[class="mktoError"]'

class storagePage
{
    //Input
    firstNameField() {
        commonPage.getElement(firstName).type(random)
    }
    lastNameField() {
        commonPage.getElement(lastName).type(random)
    }
    emailFieldNotValid() {
        commonPage.getElement(email).type(random)
    }
    emailFieldValid() {
        commonPage.getElement(email).type(randomEmail)
    }

    //Notifications
    emailNotificationError() {
        commonPage.getElement(emailError).should('contain.text', "Must be valid email. example@yourdomain.com")
    }
}

module.exports = new storagePage();