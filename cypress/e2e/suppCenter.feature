Feature: support center search
  Scenario: support center valid search
    Given I Visit telnyx.com Website Main Page^
    When When This site uses Cookies Window appears I ClosE It
    Then I click on Support Center button

    Then I enter valid text into search field
    And I receive in search results articles that includes searched text

  Scenario: support center not valid search
    Then I enter not valid text into search field
    And I receive search error text notification