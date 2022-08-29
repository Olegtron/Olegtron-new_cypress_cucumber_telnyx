Feature: entered valid email in Try For Free registration auto inserting to registration form
  Scenario: entered valid email in Try For Free registration auto inserting to registration form
    Given I visit telnyx.com Website main page
    When When This site uses Cookies window appears i close it
    Then I enter valid email in Try For Free email text field and click Try For Free button

    Then In opened page i could see entered email in Work Email text field
