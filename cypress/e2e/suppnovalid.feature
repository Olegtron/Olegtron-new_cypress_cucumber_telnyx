Feature: support center not valid search
  Scenario: support center not valid search
    Given ^I Visit telnyx.com Website Main Page^
    When ^When This site uses Cookies Window appears I ClosE It
    Then I click on Support Center button^

    Then I enter not valid text into search field
    And I receive search error text notification
