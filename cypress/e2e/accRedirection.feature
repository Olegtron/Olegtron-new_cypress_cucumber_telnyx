Feature: correct redirection after click on Create Free Trial Account
  Scenario: create free trial account button correct redirection to sign-up page
    Given I visit telnyx.com Website main pagE
    When When This site uses Cookies window appears i close It
    Then I scroll down to Switch + Save with Telnyx section and click Create a free trial account button
    And I should be redirected to sign-up page