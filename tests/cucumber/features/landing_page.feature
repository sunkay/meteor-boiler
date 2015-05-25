Feature: One-liner description of this feature

  As a [role]
  I want [feature]
  So that [benefit]

  The story above is to set context for the reader. It doesn't actually have any impact on the test
  itself. The phrases inside the scenarios are ties to test code using regex, which you can see in
  /tests/features/step_definitions/steps.js

  In this textual part of the file, you can include context about this feature, you can add links to
  external documents and whatever is needed to create the full specification.

  # The background will be run for every scenario
  #Background:
  #  Given I am a new user

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When I navigate to "/"
    Then I should see the title "SunTheme"

  @dev
  Scenario: Homepage has 10 posts
    When I navigate to "/"
    Then I should see 10 posts

  @dev
  Scenario: Add a new post
    Given I am logged in
    When I navigate to "newPost"
    And I submit a new post
    And I navigate to "/"
    Then I should see 10 posts
    And I should see the post with title "Test Post"
    And I should delete the new post

  @dev
  Scenario: Edit a post
    Given I am logged in
    And I navigate to "/"
    When I click on edit post
    And I edit a post
    Then I should see the post with title "EDITED Post"
    And I should delete the new post

  @dev
  Scenario: Paginate should show right amount of posts
    Given I am logged in
    And I navigate to "/posts/paginate/5"
    Then I should see 5 posts

  @dev
  Scenario:Visitors clicking on new post page should get a sign in page 
    Given I am logged out
    When I navigate to "/newPost"
    Then I should see a "Sign In" form


  # This scenario will not run as part of the Meteor dev cycle because it does not have the @dev tag
  # But it will run on CI if you use `meteor --test` for instance
  Scenario:
    When I navigate to "/"
    Then I should see the title "another intentional failure"