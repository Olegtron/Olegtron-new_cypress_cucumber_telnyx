const random = Math.random().toString(36).substring(4,14)

class contactUsPage
{
    //Buttons
    submitButton(){
        return cy.get('.mktoButtonRow > span > button').click()
    }

    //Input
    reasonDropDown(){
        return cy.get('#Reason_for_Contact__c').select('Support').type('{enter}')
    }
    firstName() {
        return cy.get('#FirstName').type(random).type('{enter}')
    }
    lastName() {
        return cy.get('#LastName').type(random).type('{enter}')
    }
    businessEmail() {
        return cy.get('#Email').type(random+'@gmail.com')
    }
    businessEmailNotValid() {
        return cy.get('#Email').type(random)
    }
    countryDropDown(){
        return cy.get('#Phone_Number_Extension__c').select('+1').type('{enter}')
    }
    phoneNumber(){
        return cy.get('#Phone_Number_Base__c').type('3124444444')
    }
    companyWebsite() {
        return cy.get('#Website').type("http://"+random+"@gmail.com")
    }
    companyWebsiteNotValid() {
        return cy.get('#Website').type(random)
    }
    //Notifications

    confirmationText() {
        return cy.get('.gQAeUA > main > div > h1').should('be.visible').should('have.text', 'Thanks for Reaching Out!')
    }
    emailErrorText() {
        return cy.get('.mktoRequiredField > div.mktoError').should('be.visible').should('have.text', 'Must be valid email. example@yourdomain.com')
    }
    websiteErrorText() {
        return cy.get('.mktoRequiredField > div.mktoError').should('be.visible').should('have.text', 'Must be a url. http://www.example.com/')
    }
}

module.exports = new contactUsPage();