Feature: talk to an expert functionality
  Scenario: talk to an expert using valid credentials
    Given I visit telnyx.com website main page
    When When This site uses cookies window appears i close it
    Then I click on Talk to an expert button
    And I enter all valid data to text boxes and click Submit button
    And Check that ticket was succesfully submited

  Scenario: talk to an expert using invalid email and company website
    Then I go to telnyx.com website main page$
    And ^I click on Talk to an expert button
    Then I fill contact form with valid data and invalid email and should see error notification
    And I enter invalid website and should see error notification