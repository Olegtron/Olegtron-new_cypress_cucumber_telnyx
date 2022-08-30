import commonPage from "./commonPage"

const forgotPass = '[href="/#/login/password-reset"]'
const logIn = 'react-login>div>div>div:nth-child(3)>form>button'
const emailField = 'div:nth-child(1)>label>div>div>input'
const passField = 'div:nth-child(2)>label>div>div>input'

class logInPage
{
    forgotPassLink() {
        commonPage.clickElement(forgotPass)
    }
    logInButton() {
        commonPage.clickElement(logIn)
    }
    bussinessEmailField() {
        commonPage.getElement(emailField).type("kusoushimatta@gmail.com")
    }
    passwordField() {
        commonPage.getElement(passField).type('000000000qQ@')
    }
}
module.exports = new logInPage();