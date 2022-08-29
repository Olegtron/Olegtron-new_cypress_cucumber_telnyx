Feature: request a demo feature check
  Scenario: request a demo feature check
    Given ^I visit telnyx.com website main page^
    When ^When this site uses cookies window appears i close it^
    Then I click on Request a demo link
    And In new opened page I enter valid credentials in contact form

    Then I click on Submit button
    And I in new opened page i receive confirmation text