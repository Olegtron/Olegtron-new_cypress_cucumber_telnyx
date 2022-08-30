Feature: switch and save with Telnyx sliders functionality
  Scenario: sliders and price check for voice tab
    Given ^$I visit telnyx.com website main page
    When When This site uses cookies window appears i close it^
    Then I scroll page to switch+save with Telnyx block
    And I see default settings preset for this block

    Then I move Make outbound calls and Receive inbound calls sliders
    And I see that price in Compare Costs section is changed

  Scenario: sliders and price check for sms tab
    Then I click on SMS button
    And ^I see default settings preset for this block

    Then I move Send messages and Receive messages sliders
    And ^I see that price in Compare Costs section is changed