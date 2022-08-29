import {  Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'
import logInPage from '../../pageobjects/logInPage'
import homePage from '../../pageobjects/homePage'
import cartPage from '../../pageobjects/cartPage'
import searchNumbersPage from '../../pageobjects/searchNumbersPage'

after(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
})

Given("I Visit telnyx.com Website Main Page", () => {
  cy.visit("https://telnyx.com/");
});
When("When This site uses Cookies Window appears I close It", () => {
  mainPage.cookieCloseButton()
  cy.wait(2000)
});
Then("I Click on Log In Button", () => {
  mainPage.logInButton()  
  cy.wait(5000)
});
And("In Opened page I enter valid data to login form and click Log In button", () => {
  logInPage.bussinessEmailField()
  logInPage.passwordField()
  logInPage.logInButton()
});
Then("In Opened home page i click on Cart button", () => {
  cy.wait(5000)
  homePage.cartButton()
  cy.wait(3000)
});
And("I Check that cart is empty", () => {
  cartPage.emptyCartText()
});
Then("I Click on Search for Numbers button", () => {
  cartPage.searchForNumbersButton()
});
And("I Add some product to my cart and check that product added", () => {
  searchNumbersPage.exampleSearchesToggle()
  searchNumbersPage.searchNumbersButton()
  searchNumbersPage.addProductButton()
  cy.wait(6000)
  searchNumbersPage.cartButton()

  cartPage.checkMark()
  cartPage.emptyCartButton()
  cartPage.totalCredit()
  });
Then("I empty cart and check that its empty", () => {
  cartPage.emptyCartButton().click()
  cartPage.emptyCartText()
});