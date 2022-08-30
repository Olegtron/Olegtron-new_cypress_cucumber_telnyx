import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'
import storagePage from '../../pageobjects/storagePage'
import confirmationPage from '../../pageobjects/confirmationPage'
import commonPage from "../../pageobjects/commonPage"

//Scenario: join the whitelist with valid credentials
Given("^I visit telnyx.com website main page", () => {
  commonPage.openUrl()
});
When("^When this site uses cookies window appears i close it", () => {
  commonPage.cookieCloseButton()
});
Then("I click on Join the waitlist link", () => {
  mainPage.waitListLink()
});
And("In opened page I click on Join the waitlist button", () => {
  commonPage.joinWaitListButton()
});
Then("In join form I enter valid data and click Apply Now button", () => {
  storagePage.firstNameField()
  storagePage.lastNameField()
  storagePage.emailFieldValid()
  commonPage.applyNowButton()
});
And("I redirected to new page and see confirmation text", () => {
  confirmationPage.urlCheck()
  confirmationPage.confirmationText()
});

//Scenario: join the whitelist with invalid email
Then("I visit telnyx.com website main page^", () => {
  commonPage.openUrl()
});
And("I click on Join the waitlist link^", () => {
  mainPage.waitListLink()
});
Then("In opened page I click on Join the waitlist button^", () => {
  commonPage.joinWaitListButton()
});
Then("In join form I enter valid data and invalid email, and click Apply Now button", () => {
  storagePage.firstNameField()
  storagePage.lastNameField()
  storagePage.emailFieldNotValid()
  commonPage.applyNowButton()
});
And("I receive error notification under email text field", () => {
  storagePage.emailNotificationError()
});