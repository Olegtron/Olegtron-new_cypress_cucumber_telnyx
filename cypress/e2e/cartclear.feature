Feature: delete items from cart
  Scenario: empty cart from products
    Given I Visit telnyx.com Website Main Page
    When When This site uses Cookies Window appears I close It
    Then I Click on Log In Button
    And In Opened page I enter valid data to login form and click Log In button

    Then In Opened home page i click on Cart button
    And I Check that cart is empty

    Then I Click on Search for Numbers button
    And I Add some product to my cart and check that product added

    Then I empty cart and check that its empty