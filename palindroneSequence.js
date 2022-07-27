/**
 * palindroneSequence
 * Given a parameter returns the closest palindrone to the string entered, if a tie then returns the lower palindrone
 *
 * @param string or number.  string representing an integer 
 * @returns string. the closest integer (not including itself), which is a palindrome
 *
 */
const palindroneSequence = (input_string) => {
    var currentNumber = 0;
    var searchIndex = 0;
    var isNumberPalindrone = false;

    if (!input_string) return "Invalid input: please enter a value"
    if (!/^-?[0-9]+$/.test(input_string)) return "Invalid input: String must contain only positive or negative integers";

    var inputNumber = parseInt(input_string);

    do {
        searchIndex ++;

        //check next lower number if it is a palindrone
        currentNumber = inputNumber - searchIndex;
        isNumberPalindrone = isPalindrone(currentNumber);
        if (isNumberPalindrone) break;

        //check next higher number if it is a palindrone
        currentNumber = inputNumber + searchIndex;
        isNumberPalindrone = isPalindrone(currentNumber);
        if (isNumberPalindrone) break;
    } while (isNumberPalindrone === false);

    return currentNumber.toString();
}

/** 
 * isPalindrone
 * Checks a given parameter and returns true if a palindrome, false if not a palindrome
 *
 * @param number.  number which is being checked if it is a palindrome
 * @returns boolean. true if number is palindrome
 *
 */
const isPalindrone = ((input_number) => {
    var input_string = Math.abs(input_number).toString();  // removed negative number as not required to check if palindrome
    var halfLength = Math.floor(input_string.length/2);  
    var firstHalfReversed = input_string.substring(0, halfLength).split("").reverse().join("");  // reversed string to compare with second half
    var secondHalf = input_string.substring(input_string.length-halfLength); 

    if (firstHalfReversed === secondHalf) {
        return true;
    } else {
        return false;
    }
})

module.exports = {
                    palindroneSequence,
                    isPalindrone
                };