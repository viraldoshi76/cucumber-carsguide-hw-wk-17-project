Feature: Search Functiionality
  As a User I should login into carsguide website

  @Smoke
  Scenario Outline: User should Search the buy car with model
    Given I am on homepage
    When I mouse hover on buy+sell tab
    And I click Search Cars
    Then I navigate to new and used car search page "New & Used Car Search - carsguide"
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
    |make         | model   |location        |price   |
    |Mazda        |B4000    |NSW - Newcastle |$90,000 |
    |Jeep         |Commander|NT-All          |$80,000 |
    |BMW          |M140I    |SA-Murray       |$100,000|
    |Mercedes-Benz|GT       |WA-Perth        |$90,000 |
    |Audi         |Q8       |NSW-Sydney      |$80,000 |
    |Mazda        |CX-30    |NSW-Far West    |$100,000|


