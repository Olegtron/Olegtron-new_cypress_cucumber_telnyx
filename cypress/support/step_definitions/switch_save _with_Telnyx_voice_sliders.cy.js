import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'

Given("^$I visit telnyx.com website main page", () => {
    cy.visit("https://telnyx.com/");
});
When("When This site uses cookies window appears i close it^", () => {
    mainPage.cookieCloseButton()
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