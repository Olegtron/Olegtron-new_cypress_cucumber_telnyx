import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'
import commonPage from "../../pageobjects/commonPage"

//Scenario: sliders and price check for voice tab
Given("^$I visit telnyx.com website main page", () => {
    commonPage.openUrl()
});
When("When This site uses cookies window appears i close it^", () => {
    commonPage.cookieCloseButton()
});
Then("I scroll page to switch+save with Telnyx block", () => {
    cy.wait(2000)
    mainPage.switchAndSaveBlock()
});
And("I see default settings preset for this block", () => {
    mainPage.makeUnboundCalls()
    mainPage.receiveInboundCalls()
    mainPage.tellnyxCompareCostBasic()
    mainPage.twilioCompareCostBasic()
});
Then("I move Make outbound calls and Receive inbound calls sliders", () => {
    mainPage.makeUnboundCallsSlider()
    mainPage.receiveInboundCallsSlider()
});
And("I see that price in Compare Costs section is changed", () => {
    mainPage.tellnyxCompareCost()
    mainPage.twilioCompareCost()
});

//Scenario: sliders and price check for sms tab
Then("I click on SMS button", () => {
    mainPage.smsButtonView()
    mainPage.smsButton()
});
And("^I see default settings preset for this block", () => {
    mainPage.sendMessages()
    mainPage.receiveMessages()
    mainPage.tellnyxCompareCostSMSBasic()
    mainPage.twilioCompareCostSMSBasic()
});
Then("I move Send messages and Receive messages sliders", () => {
    mainPage.sendMessagesSlider()
    mainPage.receiveMessagesSlider()
});
And("^I see that price in Compare Costs section is changed", () => {
    mainPage.tellnyxCompareCostSMS()
    mainPage.twilioCompareCostSMS()
});