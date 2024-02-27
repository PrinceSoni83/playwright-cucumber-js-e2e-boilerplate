Feature: Products Purchase Lifecyle

    As a user 
    I want to test
    All basic scenarios for products purchased lifecycle
    

    Scenario: Single Product Lifecycle
      Given I am on the login screen
      When I fill the login form with valid credentials
      Then I should be able to see the home screen
      Then I will be able to add Sauce Labs Backpack to the Cart from Homepage
