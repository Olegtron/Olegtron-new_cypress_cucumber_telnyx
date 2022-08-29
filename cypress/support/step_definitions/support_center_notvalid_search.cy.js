import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'
import supportCenterPage from '../../pageobjects/supportCenterPage'

Given("^I Visit telnyx.com Website Main Page^", () => {
  cy.visit("https://telnyx.com/");
});
When("^When This site uses Cookies Window appears I ClosE It", () => {
  mainPage.cookieCloseButton()
});
Then("I click on Support Center button^", () => {
  mainPage.supportCenterButton()
});
Then("I enter not valid text into search field", () => {
  supportCenterPage.searchTextInputNotValid()
});
And("I receive search error text notification", () => {
    supportCenterPage.errorSearchText()
  });
