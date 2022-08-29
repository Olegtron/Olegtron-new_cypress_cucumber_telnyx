Feature: add product to cart feature
  Scenario: adding product to cart
    Given I Visit telnyx.com Website Main page
    When When This site uses Cookies Window appears I close it
    Then I click on Log In Button
    And In opened page I enter valid data to login form and click Log In button

    Then In opened home page i click on Cart button
    And I check that cart is empty

    Then I click on Search for Numbers button
    And I add some product to my cart and check that product added
