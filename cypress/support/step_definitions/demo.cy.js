import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'
import contactUsPage from '../../pageobjects/contactUsPage'
import commonPage from "../../pageobjects/commonPage"

Given("^I visit telnyx.com website main page^", () => {
  commonPage.openUrl()
});
When("^When this site uses cookies window appears i close it^", () => {
  commonPage.cookieCloseButton()
});
Then("I click on Request a demo link", () => {
  mainPage.requestDemoLink()
});
And("In new opened page I enter valid credentials in contact form", () => {
  contactUsPage.reasonDropDown()
  contactUsPage.firstName()
  contactUsPage.lastName()
  contactUsPage.businessEmail()
  contactUsPage.countryDropDown()
  contactUsPage.phoneNumber()
  contactUsPage.companyWebsite()
  });
Then("I click on Submit button", () => {
  contactUsPage.submitButton()
});
And("I in new opened page i receive confirmation text", () => {
  contactUsPage.confirmationText()
}); 