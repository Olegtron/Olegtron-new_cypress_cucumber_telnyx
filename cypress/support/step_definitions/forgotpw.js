import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'
import logInPage from '../../pageobjects/logInPage'
import passwordResetPage from '../../pageobjects/passwordResetPage'
import commonPage from "../../pageobjects/commonPage"

Given("I Visit telnyx.com Website main page", () => {
  cy.visit('/')
});
When("When This site uses Cookies Window appears i close it", () => {
  commonPage.cookieCloseButton()
});
Then("I click on Log In button", () => {
  mainPage.logInButton()  
});
And("In opened page I click on Forgot your password? link", () => {
  logInPage.forgotPassLink()
});
Then("I enter valid email and click Reset password button", () => {
  passwordResetPage.emailText()
  passwordResetPage.resetPassButton()
});
And("I receive notification that password reset request successfully done", () => {
  passwordResetPage.notificationText()
});

