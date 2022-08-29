import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'

Given("I visit telnyx.com website main page$^", () => {
    cy.visit("https://telnyx.com/");
});
When("When This site uses cookies window appears i close IT", () => {
    mainPage.cookieCloseButton()
});
Then("^I scroll page to switch+save with Telnyx block", () => {
    cy.wait(2000)
    mainPage.switchAndSaveBlock()
});
And("I click on SMS button", () => {
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