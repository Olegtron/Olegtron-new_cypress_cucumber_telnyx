import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'
import supportCenterPage from '../../pageobjects/supportCenterPage'
import commonPage from "../../pageobjects/commonPage"

after(() => {
  cy.clearCookies()
  cy.clearLocalStorage()
})

//Scenario: support center valid search
Given("I Visit telnyx.com Website Main Page^", () => {
  cy.visit('/')
  //commonPage.openUrl()
});
When("When This site uses Cookies Window appears I ClosE It", () => {
  commonPage.cookieCloseButton()
});
Then("I click on Support Center button", () => {
  mainPage.supportCenterButton()
});
Then("I enter valid text into search field", () => {
  supportCenterPage.searchTextInputValid()
});
And("I receive in search results articles that includes searched text", () => {
  supportCenterPage.resultArticle1()
  supportCenterPage.resultArticle2()
});

//Scenario: support center not valid search
Then("I enter not valid text into search field", () => {
    supportCenterPage.clearInput()
    supportCenterPage.searchTextInputNotValid()
});
And("I receive search error text notification", () => {
    supportCenterPage.errorSearchText()
});