import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'
import signUpPage from '../../pageobjects/signUpPage'
import commonPage from "../../pageobjects/commonPage"

Given("I visit telnyx.com Website main pagE", () => {
  cy.visit('/')
});
When("When This site uses Cookies window appears i close It", () => {
  commonPage.cookieCloseButton()
  cy.wait(4000)
});
Then("I scroll down to Switch + Save with Telnyx section and click Create a free trial account button", () => {
  mainPage.switchAndSaveBlock()
  mainPage.createTrialAccButton()
  cy.wait(4000)
  });
And("I should be redirected to sign-up page", () => {
  signUpPage.checkUrl()
});