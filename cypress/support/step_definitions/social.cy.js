import {  Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import mainPage from '../../pageobjects/mainPage'
import commonPage from "../../pageobjects/commonPage"

Given("I Visit telnyx.com Website Main PagE", () => {
  commonPage.openUrl()
});
When("When This site uses Cookies Window appears I Close It", () => {
  commonPage.cookieCloseButton()
});
Then("In site footer i click on each social link and each social link should redirect to relevant social network", () => {
  mainPage.linkedInLink()
  mainPage.twitterLink()
  mainPage.facebookLink()
});


