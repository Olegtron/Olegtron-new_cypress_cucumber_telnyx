import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'
import storagePage from '../../pageobjects/storagePage'

Given("I visit telnyx.com website main page^", () => {
  cy.visit("https://telnyx.com/");
});
When("When this site uses cookies window appears i close it^", () => {
  mainPage.cookieCloseButton()
});
Then("I click on Join the waitlist link^", () => {
  mainPage.waitListLink()
});
And("In opened page I click on Join the waitlist button^", () => {
  storagePage.joinButton()
});
Then("In join form I enter valid data and not valid email, and click Apply Now button", () => {
  storagePage.firstNameField()
  storagePage.lastNameField()
  storagePage.emailFieldNotValid()
  storagePage.applyNowButton()
});
And("I receive error notification under email text field", () => {
  storagePage.emailNotificationError()
});