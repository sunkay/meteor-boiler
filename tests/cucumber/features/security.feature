#this feature is before a user logs in... If logged in, then before hook will do a log out action

@beforeHookLogout
Feature: Certain functionality is only available after login
  As a visitor
  I can only see certain content
  So that sensitive content is secure and available only for our loggeed users

  Scenario:Visitors clicking on blank page should get a sign in page 
    Given I am on the home page
    And I am logged out
    When I navigate to "blank"
    Then I should see a "Sign In" form

  Scenario:Visitors clicking on new post page should get a sign in page 
    Given I am on the home page
    And I am logged out
    When I navigate to "newPost"
    Then I should see a "Sign In" form