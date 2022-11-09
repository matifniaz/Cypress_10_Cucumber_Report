Feature: Login

  Scenario: Login user with correct email and password
    Given I navigate to automation exercise website
    When I enter login credentials
    Then I should be logged in