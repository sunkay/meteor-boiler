#this feature is after a user logs in...
@beforeHookLogin
Feature: Landing Page works as expeted

  As a user
  I want the landing page to work as expected
  So that the site is secure and consumable for our users

  Scenario:
    Given I am on the home page
    When I navigate to "/"
    Then I should see the title of "SunTheme"

  Scenario: Homepage has 10 posts
    Given I am on the home page
    When I navigate to "/"
    Then I should see 10 posts

  Scenario: Add a new post
    Given I am logged in
    When I navigate to "newPost"
    And I submit a new post
    And I navigate to "/"
    Then I should see 10 posts
    And I should delete the new post

  Scenario: Edit a post
    Given I am logged in
    And I navigate to "/"
    When I click on edit post
    And I edit a post
    Then I should see edited post

  Scenario: Paginate should show right amount of posts
    Given I am logged in
    And I navigate to "posts/paginate/5"
    Then I should see 5 posts

