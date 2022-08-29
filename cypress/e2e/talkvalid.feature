Feature: talk to an expert functionality using valid credentials
  Scenario: talk to an expert functionality using valid credentials
    Given I visit telnyx.com website main page
    When When This site uses cookies window appears i close it
    Then I click on Talk to an expert button
    And I enter all valid data to text boxes and click Submit button
    And check that ticket was succesfully submited