# ADPTest

# Project test automation for test cases of ADP

Test Case 1: Login
1) Open the browser
2) Enter the URL “https://opensource-demo.orangehrmlive.com/web/index.php/
auth/login”
3) Fill out username and password credentials, then click Login
4) Validate that you are on Dashboard page

Test Case 2: Recruitment - Create Candidate
Pre-condition: You’re logged in the system
1) Click on Recruitment tab on left navigation menu
2) Click Add button to add a new candidate
3) Fill out all required fields
4) Click Save
5) Validate that the user was successfully created

Test Case 3: Recruitment - Edit candidate
Pre-condition: You’re logged in the system and there is at least one candidate
1) Click on Recruitment tab on left navigation menu
2) Find the candidate you created in Test Case 2
3) Edit that candidate’s profile
4) Click Save
5) Validate that the user profile was successfully updated