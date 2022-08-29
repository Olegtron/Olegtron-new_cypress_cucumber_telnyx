Feature: join the whitelist with valid credentials
  Scenario: join the whitelist with valid credentials
    Given ^I visit telnyx.com website main page
    When ^When this site uses cookies window appears i close it
    Then I click on Join the waitlist link
    And In opened page I click on Join the waitlist button

    Then In join form I enter valid data and click Apply Now button
    And I redirected to new page and see confirmation text