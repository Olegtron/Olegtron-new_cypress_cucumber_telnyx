import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'
import signUpPage from '../../pageobjects/signUpPage'

Given("I visit telnyx.com Website main page", () => {
  cy.visit("https://telnyx.com/");
});
When("When This site uses Cookies window appears i close it", () => {
  mainPage.cookieCloseButton()
});
Then("I enter valid email in Try For Free email text field and click Try For Free button", () => {
  mainPage.tryForFreeEmail()
  mainPage.tryForFreeButton()
});
Then("In opened page i could see entered email in Work Email text field", () => {
  signUpPage.workEmailField()
});

