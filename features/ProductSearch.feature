Feature: Product Search
   As a user
   I want to search for products
   So that I can find items I want to purchase


   Scenario: Search for HTC One Mini Blue
      Given I am on the homepage of the nopCommerce website
      When I search for HTC One Mini Blue
      Then I should see search results for HTC One Mini Blue