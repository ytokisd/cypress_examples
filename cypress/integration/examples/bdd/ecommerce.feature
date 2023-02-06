Feature: Edn to end Ecommerce validation

    application Regression
    @regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total prices
    Then select the country submit and verify Thankyou message

    @smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    |name | gender|
    |bill | Male|
    Then Validate form behavior
    And Select Shop page
