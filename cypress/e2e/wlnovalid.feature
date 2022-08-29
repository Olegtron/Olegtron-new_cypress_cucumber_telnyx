Feature: join the whitelist with not valid email
  Scenario: join the whitelist with not valid email
    Given I visit telnyx.com website main page^
    When When this site uses cookies window appears i close it^
    Then I click on Join the waitlist link^
    And In opened page I click on Join the waitlist button^

    Then In join form I enter valid data and not valid email, and click Apply Now button
    And I receive error notification under email text field