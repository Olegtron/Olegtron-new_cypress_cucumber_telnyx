const random = Math.random().toString(36).substring(4,14)

class mainPage
{
    //Buttons
    cookieCloseButton(){
        cy.get('div.sc-62badcbb-0.gQAeUA > div > div > button').click()
    }
    talkExpertButton(){
        cy.get('li:nth-child(1) > div > a').click()
    }
    smsButton() {
        cy.get('button.Button__StyledDefaultButton-vntg8h-0.hANPHj').click()
    }
    tryForFreeButton() {
        cy.get('div.sc-876fcb71-1.fywsqS > div > div > button').click()
    }
    logInButton() {
        cy.get('div.sc-602eb426-0.cYbJmr > div > div > a:nth-child(4)').click()
    }
    createTrialAccButton() {
        cy.get('div.sc-1a5981e5-16.fauQOi > div.sc-5d3a275a-0.eKznVb > a').click()
    }
    supportCenterButton() {
        cy.get('div.sc-602eb426-0.cYbJmr > div > div > a:nth-child(3)').click()
    }

    //Links
    waitListLink() {
        cy.get('div.sc-602eb426-0.cYbJmr > div > span > div > span > a').click()
    }
    requestDemoLink() {
        cy.get('div.sc-5d3a275a-29.hQDMMf > div > p > a').click()
    }
    linkedInLink() {
        cy.get('div.sc-7b6c9f9b-3.iznSjj > div > div:nth-child(6) > div > ul > li:nth-child(1) > a').scrollIntoView().invoke('removeAttr', 'target').click().url().should('contain', 'https://www.linkedin.com/').go('back')
    }
    twitterLink() {
        cy.get('div.sc-7b6c9f9b-3.iznSjj > div > div:nth-child(6) > div > ul > li:nth-child(2) > a').invoke('removeAttr', 'target').click().url().should('contain', 'https://twitter.com/').go('back')
    }
    facebookLink() {
        cy.get('div.sc-7b6c9f9b-3.iznSjj > div > div:nth-child(6) > div > ul > li:nth-child(3) > a').invoke('removeAttr', 'target').click().url().should('contain', 'https://www.facebook.com/')
    }

    //Page Elements
    switchAndSaveBlock() {
        return cy.get('.sc-1e626587-1.fjgfOb > h2 > a > span').scrollIntoView()
    }
    makeUnboundCalls() {
        return cy.get(':nth-child(4) > div.sc-1a5981e5-4.liMKkt').should('be.visible').should('have.text', '240,000 minutes per month using 480 local numbers.')
    }
    receiveInboundCalls() {
        return cy.get(':nth-child(5) > div.sc-1a5981e5-4.liMKkt').should('be.visible').should('have.text', '110,000 minutes per month using 220 local numbers.')
    }
    tellnyxCompareCostBasic() {
        return cy.get('.bAmCql > span > span').should('be.visible').should('have.text', '$2,578')
    }
    twilioCompareCostBasic() {
        return cy.get('.fgvOeg > div:nth-child(2) > span').should('be.visible').should('have.text', '$4,502')
    }
    tellnyxCompareCost() {
        return cy.get('.bAmCql > span > span').should('be.visible').should('not.have.text', '$2,578')
    }
    twilioCompareCost() {
        return cy.get('.fgvOeg > div:nth-child(2) > span').should('be.visible').should('not.have.text', '$4,502')
    }
    makeUnboundCallsSlider() {
        return cy.get(':nth-child(4) > div.telnyx-slider > div > div.ant-slider-handle').click({ multiple: true, force: true }).type("{rightarrow}{rightarrow}")
    }
    receiveInboundCallsSlider() {
        return cy.get(':nth-child(5) > div.telnyx-slider > div > div.ant-slider-handle').click({ multiple: true, force: true }).type("{rightarrow}{rightarrow}")
    }
    sendMessages() {
        return cy.get(':nth-child(4) > div.sc-1a5981e5-4.liMKkt').should('be.visible').should('have.text', '285,000 SMS per month.')
    }
    receiveMessages() {
        return cy.get(':nth-child(5) > div.sc-1a5981e5-4.liMKkt').should('be.visible').should('have.text', '350,000 SMS per month.')
    }
    tellnyxCompareCostSMSBasic() {
        return cy.get('.sc-1a5981e5-14.bAmCql > span > span').should('be.visible').should('have.text', '$2,540')
    }
    twilioCompareCostSMSBasic() {
        return cy.get('.sc-1a5981e5-7.fgvOeg > div:nth-child(2) > span').should('be.visible').should('have.text', '$4,763')
    }
    tellnyxCompareCostSMS() {
        return cy.get('.sc-1a5981e5-14.bAmCql > span > span').should('be.visible').should('not.have.text', '$2,540')
    }
    twilioCompareCostSMS() {
        return cy.get('.sc-1a5981e5-7.fgvOeg > div:nth-child(2) > span').should('be.visible').should('not.have.text', '$4,763')
    }
    sendMessagesSlider() {
        return cy.get(':nth-child(4) > div.telnyx-slider > div > div.ant-slider-handle').click({ multiple: true, force: true }).type("{rightarrow}{rightarrow}")
    }
    receiveMessagesSlider() {
        return cy.get(':nth-child(5) > div.telnyx-slider > div > div.ant-slider-handle').click({ multiple: true, force: true }).type("{rightarrow}{rightarrow}")
    }

    //Input
    tryForFreeEmail() {
        return cy.get('div.sc-876fcb71-1.fywsqS > input').type(random+"@gmail.com")
    }
}

module.exports = new mainPage();