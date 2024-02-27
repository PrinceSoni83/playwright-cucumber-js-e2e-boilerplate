Feature: Login Page

    As a user 
    I want to test
    All basic scenarios for login Page
    

    Scenario: Login with valid credentials
      Given I am on the login screen
      When I fill the login form with valid credentials
      Then I should be able to see the home screen

#  Scenario: Complete product lifecycle
#       Given I am on the login screen
#       When I can conplete 1 product lifecycle
#       Then I should be able to see product purchased
