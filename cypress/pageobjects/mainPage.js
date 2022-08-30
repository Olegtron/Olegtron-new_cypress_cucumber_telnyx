import commonPage from "./commonPage"

const random = Math.random().toString(36).substring(4,14)
const talkToExpert = 'li:nth-child(1) > div > a'
const sms = 'div>div>div>div>div>div>div>button:nth-child(2)'
const tryForFree = '[type="submit"]'
const logIn = 'header>div>div>div>a:nth-child(4)'
const createTrialAcc = 'div>[href="https://telnyx.com/sign-up"]'
const supportCenter = 'header>div>div>div>a:nth-child(3)'

const waitList = 'header>div>div>span>div>span>a'
const requestDemo = 'div>div>div>div>div>div>div>p>a'
const linkedinUrl = 'https://www.linkedin.com/'
const linkedinLink = '[href="https://www.linkedin.com/company/telnyx/"]'
const twitterUrl = 'https://twitter.com/'
const twitterLink = '[href="https://twitter.com/telnyx"]'
const facebookUrl = 'https://www.facebook.com/'
const facebookLink = '[href="https://www.facebook.com/Telnyx/"]'

const switchAndSaveBlock = 'div>h2>a>span'
const makeUnbound = 'main>div>div>div>div>div>div>div>div>div>div:nth-child(4)>div:nth-child(3)'
const receiveUnbound = 'main>div>div>div>div>div>div>div>div>div>div:nth-child(5)>div:nth-child(3)'
const tellnyxCompare = 'div>span>span'
const twilioCompare = 'div>div>div>div>div>div>div>div:nth-child(2) > span'
const makeUnboundCallsSlider = ':nth-child(4) > div.telnyx-slider > div > div.ant-slider-handle'
const receiveInboundCallsSlider = ':nth-child(5) > div.telnyx-slider > div > div.ant-slider-handle'
const tryForFreeEmailInput = '[type="email"]'

class mainPage
{
    //Buttons
    talkExpertButton(){
        commonPage.clickElement(talkToExpert)
    }
    smsButton() {
        commonPage.clickElement(sms)
    }
    tryForFreeButton() {
        commonPage.clickElement(tryForFree)
    }
    logInButton() {
        commonPage.clickElement(logIn)
    }
    createTrialAccButton() {
        commonPage.clickElement(createTrialAcc)
    }
    supportCenterButton() {
        commonPage.clickElement(supportCenter)
    }

    //Links
    waitListLink() {
        commonPage.clickElement(waitList)
    }
    requestDemoLink() {
        commonPage.clickElement(requestDemo)
    }
    linkedInLink() {
        cy.get(linkedinLink).scrollIntoView().invoke('removeAttr', 'target').click().url().should('contain', linkedinUrl).go('back')
    }
    twitterLink() {
        cy.get(twitterLink).invoke('removeAttr', 'target').click().url().should('contain', twitterUrl).go('back')
    }
    facebookLink() {
        cy.get(facebookLink).invoke('removeAttr', 'target').click().url().should('contain', facebookUrl).go('back')
    }

    //Page Elements
    smsButtonView() {
        commonPage.getElement(sms).scrollIntoView()
    }
    switchAndSaveBlock() {
        commonPage.getElement(switchAndSaveBlock).scrollIntoView()
    }
    makeUnboundCalls() {
        commonPage.getElement(makeUnbound).should('be.visible').should('have.text', '240,000 minutes per month using 480 local numbers.')
    }
    receiveInboundCalls() {
        commonPage.getElement(receiveUnbound).should('be.visible').should('have.text', '110,000 minutes per month using 220 local numbers.')
    }
    tellnyxCompareCostBasic() {
        commonPage.getElement(tellnyxCompare).should('be.visible').should('have.text', '$2,578')
    }
    twilioCompareCostBasic() {
        commonPage.getElement(twilioCompare).should('be.visible').should('have.text', '$4,502')
    }
    tellnyxCompareCost() {
        commonPage.getElement(tellnyxCompare).should('be.visible').should('not.have.text', '$2,578')
    }
    twilioCompareCost() {
        commonPage.getElement(twilioCompare).should('be.visible').should('not.have.text', '$4,502')
    }
    makeUnboundCallsSlider() {
        commonPage.sliderDrag(makeUnboundCallsSlider)
    }
    receiveInboundCallsSlider() {
        commonPage.sliderDrag(receiveInboundCallsSlider)
    }
    sendMessages() {
        commonPage.getElement(makeUnbound).should('be.visible').should('have.text', '285,000 SMS per month.')
    }
    receiveMessages() {
        commonPage.getElement(receiveUnbound).should('be.visible').should('be.visible').should('have.text', '350,000 SMS per month.')
    }
    tellnyxCompareCostSMSBasic() {
        commonPage.getElement(tellnyxCompare).should('be.visible').should('have.text', '$2,540')
    }
    twilioCompareCostSMSBasic() {
        commonPage.getElement(twilioCompare).should('be.visible').should('have.text', '$4,763')
    }
    tellnyxCompareCostSMS() {
        commonPage.getElement(tellnyxCompare).should('be.visible').should('not.have.text', '$2,540')
    }
    twilioCompareCostSMS() {
        commonPage.getElement(twilioCompare).should('be.visible').should('not.have.text', '$4,763')
    }
    sendMessagesSlider() {
        commonPage.sliderDrag(makeUnboundCallsSlider)
    }
    receiveMessagesSlider() {
        commonPage.sliderDrag(receiveInboundCallsSlider)
    }

    //Input
    tryForFreeEmail() {
        commonPage.getElement(tryForFreeEmailInput).type(random+"@gmail.com")
    }
}

module.exports = new mainPage();