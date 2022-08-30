import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'
import contactUsPage from '../../pageobjects/contactUsPage'
import commonPage from "../../pageobjects/commonPage"

//Scenario: talk to an expert using valid credentials
Given("I visit telnyx.com website main page", () => {
  cy.visit('/')
});
When("When This site uses cookies window appears i close it", () => {
  commonPage.cookieCloseButton()
});
Then("I click on Talk to an expert button", () => {
  mainPage.talkExpertButton()
});
And("I enter all valid data to text boxes and click Submit button", () => {
  contactUsPage.reasonDropDown()
  contactUsPage.firstName()
  contactUsPage.lastName()
  contactUsPage.businessEmail()
  contactUsPage.countryDropDown()
  contactUsPage.phoneNumber()
  contactUsPage.companyWebsite()
  contactUsPage.submitButton()
});
And("Check that ticket was succesfully submited", () => {
  contactUsPage.confirmationText()
}); 

//Scenario: talk to an expert using invalid email and company website
Then("I go to telnyx.com website main page$", () => {
  commonPage.openUrl()
});
And("^I click on Talk to an expert button", () => {
  mainPage.talkExpertButton()
});
Then("I fill contact form with valid data and invalid email and should see error notification", () => {
  contactUsPage.firstName()
  contactUsPage.lastName()
  contactUsPage.businessEmailNotValid()
  contactUsPage.emailErrorText()
});
And("I enter invalid website and should see error notification", () => {
  contactUsPage.companyWebsiteNotValid()
  contactUsPage.websiteErrorText()
});