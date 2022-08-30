import commonPage from "./commonPage"

const random = Math.random().toString(36).substring(4,14)
const submit = '[type="submit"]'
const reason = '#Reason_for_Contact__c'
const firstName = '#FirstName'
const lastName = '#LastName'
const email = '#Email'
const country = '#Phone_Number_Extension__c'
const number = '#Phone_Number_Base__c'
const website = '#Website'
const confirm = 'main>div>h1'
const inputError = '[class="mktoError"]'

const randomEmail = random+"@gmail.com"
const phoneNumber = "3124444444"
const websiteUrl = "http://"+random+"@gmail.com"

class contactUsPage
{
    //Buttons
    submitButton(){
        commonPage.clickElement(submit)
    }

    //Input
    reasonDropDown(){
        commonPage.getElement(reason).select('Support').type('{enter}')
    }
    firstName() {
        commonPage.getElement(firstName).type(random).type('{enter}')
    }
    lastName() {
        commonPage.getElement(lastName).type(random).type('{enter}')
    }
    businessEmail() {
        commonPage.getElement(email).type(randomEmail)
    }
    businessEmailNotValid() {
        commonPage.getElement(email).type(random)
    }
    countryDropDown(){
        commonPage.getElement(country).select('+1').type('{enter}')
    }
    phoneNumber(){
        commonPage.getElement(number).type(phoneNumber)
    }
    companyWebsite() {
        commonPage.getElement(website).type(websiteUrl)
    }
    companyWebsiteNotValid() {
        commonPage.getElement(website).type(random)
    }

    //Notifications
    confirmationText() {
        commonPage.getElement(confirm).should('be.visible').should('have.text', 'Thanks for Reaching Out!')
    }
    emailErrorText() {
        commonPage.getElement(inputError).should('be.visible').should('have.text', 'Must be valid email. example@yourdomain.com')
    }
    websiteErrorText() {
        commonPage.getElement(inputError).should('be.visible').should('have.text', 'Must be a url. http://www.example.com/')
    }
}

module.exports = new contactUsPage();