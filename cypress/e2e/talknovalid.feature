Feature: talk to an expert functionality using not valid email and company website
  Scenario: talk to an expert functionality using not valid email and company website
    Given I go to telnyx.com website main page$
    When When This site uses cookies window appears i close it$
    Then ^I click on Talk to an expert button
    And I fill contact form with valid data and not valid email in email text field and should see error notification
    And I enter not valid website into website text field and should see error notification