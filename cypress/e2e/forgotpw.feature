Feature: forgot password in login page function check
  Scenario: forgot password in login page function check
    Given I Visit telnyx.com Website main page
    When When This site uses Cookies Window appears i close it
    Then I click on Log In button
    And In opened page I click on Forgot your password? link

    Then I enter valid email and click Reset password button
    And I receive notification that password reset request successfully done