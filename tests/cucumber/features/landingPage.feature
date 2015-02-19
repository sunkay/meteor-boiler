Feature: Landing Page works as expeted

  As a user
  I want the landing page to work as expected
  So that the site is secure and consumable for our users

  Scenario: I am able to login
  	Given I am on the home page
  	When I navigate to "/"
  	Then I should see the button "Sign In"
