Created by: Hector Young
Date: July 27, 2022
Application: Palindrome sequencing
requirements: 
    A palindrome is a sequence that reads the same backward as forward.
    Given a string n representing an integer, return the closest integer (not including itself), which is a palindrome. If there is a tie, return the smaller one.
    example:
        Input: n = "123"
        Output: "121"

Assumptions:
1. User will only pass negative or positive integers in a type of string or number.  validation for any non digit characters and "-"

Misc: 
Downloading from Github - Note that the node_modules folder is not included in GitHub repository.  Please run "npm install"

dependencies: 
1. Jest - used for unit testing of code. 
    run "npm i jest"
    to run test script "npm run test"
    unit test file: palindroneSequence.test.js 

functions: 
1. palindroneSequence.js contains two functions: palindroneSequence, isPalindrone
    palindroneSequence takes in a string or number. It starts from the input number and alternates between checking the next lower number and 
    the next higher number for a valid palindrone. palindroneSequence calls isPalindrone which checks the current number to see if it is a 
    palindrone and returns a boolean. 

    isPalindrone takes in a number and converts to string to compare the reverse of the first half with the back half of the input.  
    returns a boolean if is a palindrome