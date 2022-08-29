class logInPage
{
    forgotPassLink() {
        cy.get('div.LoginForm__FieldContainer-kXONbt.flxMbT > div > a').click()
    }
    logInButton() {
        cy.get('.SignIn__InnerPannel-liWpGL.lPbZx.kgvcZn.dkFlqp > form > button').click()
    }
    bussinessEmailField() {
        cy.get('div.LoginForm__FieldContainer-kXONbt.eSxLXo > label > div > div > input').type("kusoushimatta@gmail.com")
    }
    passwordField() {
        cy.get('.flxMbT > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input').type('000000000qQ@')
    }
}
module.exports = new logInPage();