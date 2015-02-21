Feature: Landing Page works as expeted
  As a user
  I want the landing page to work as expected
  So that the site is secure and consumable for our users

  Scenario: I am able to login
  	Given I am on the home page
    And I am not authenticated
  	When I navigate to "/"
  	Then I should see the button "Sign In"

  Scenario: Authenticated users should see a Sign Out button
    Given I am on the home page
    And I am registered
    And I am authenticated
    Then I should see a "Sign Out" button 

  Scenario: Add a post
    Given I am on the home page
    When I navigate to "/"
    Then I should see 2 posts