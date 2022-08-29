Feature: social links correct redirection check
  Scenario: social links correct redirection check
    Given I Visit telnyx.com Website Main PagE
    When When This site uses Cookies Window appears I Close It
    Then In site footer i click on each social link and each social link should redirect to relevant social network

