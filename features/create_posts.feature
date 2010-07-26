Feature: Creating posts

  Scenario: Creating a post
    Given I am logged in
    And a section exists
    When I visit new post
    And I fill in "Title" with "My post"
    And I fill in "Body" with "My test post"
    And I fill in "Tag list" with "test, general"
    And I press "Create Post"
    Then I should see "My post" within ".post h2"

    When I follow "general"
    Then I should be on posts with tag general
