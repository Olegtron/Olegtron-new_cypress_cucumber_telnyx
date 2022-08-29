import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
const random = Math.random().toString(36).substring(4,14)

import mainPage from '../../pageobjects/mainPage'
import logInPage from '../../pageobjects/logInPage'
import passwordResetPage from '../../pageobjects/passwordResetPage'

Given("I Visit telnyx.com Website main page", () => {
  cy.visit("https://telnyx.com/");
});
When("When This site uses Cookies Window appears i close it", () => {
  mainPage.cookieCloseButton()
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

