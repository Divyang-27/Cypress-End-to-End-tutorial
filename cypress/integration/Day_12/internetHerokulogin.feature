# install the gherkin full support plugin from VS code 

Feature: End to End login logout feature

  # scenario provide a infor

  Scenario: The user should be able to login and logout
    Given The user is visiting the url
    When The user us will enter the <username>
    When The user pw will enter the <password>
    When The user will click on login
    When The user will click on the logout
    Then The user logout is successful

  Examples:
    | username  | password               |
    | tomsmith  | SuperSecretPassword!   |
