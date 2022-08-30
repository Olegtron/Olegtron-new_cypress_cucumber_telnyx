import commonPage from "./commonPage"

const email = '[placeholder="Enter email"]'
const reset = 'react-login>div>div>form>div>div>button'
const notification = 'react-login>div>div>div>div>div>span>div>div'

class passwordResetPage
{
    emailText() {
        commonPage.getElement(email).type("testemail@gmail.com")
    }
    resetPassButton() {
        commonPage.clickElement(reset)
    }
    notificationText() {
        commonPage.getElement(notification).should('be.visible').should('contain', 'We have accepted your password reset request')
    }
}

module.exports = new passwordResetPage();
