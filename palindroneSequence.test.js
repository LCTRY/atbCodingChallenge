const {
    palindroneSequence,
    isPalindrone
} = require('./palindroneSequence');

describe('Function test: isPalindrone', () => {
    test ('#1 - parameter is a palindrone: input 1221 expect true', () => {
        let testInput = 1221;
        expect(isPalindrone(testInput)).toBe(true);
    });
    test ('#2 - parameter is a palindrone: input 2234322 expect true', () => {
        let testInput = 2234322;
        expect(isPalindrone(testInput)).toBe(true);
    });
    test ('#3 - parameter is a palindrone: input 1000001 expect true', () => {
        let testInput = 1000001;
        expect(isPalindrone(testInput)).toBe(true);
    });
    test ('#4 - parameter is not a palindrone: input 122141 expect false', () => {
        let testInput = 122141;
        expect(isPalindrone(testInput)).toBe(false);
    });
    test ('#5 - parameter is not a palindrone: input 9999999999998 expect false', () => {
        let testInput = 9999999999998;
        expect(isPalindrone(testInput)).toBe(false);
    });
    test ('#6 - parameter is not a palindrone: input 987654321 expect false', () => {
        let testInput = 987654321;
        expect(isPalindrone(testInput)).toBe(false);
    });
});

describe('Function test: palindroneSequence', () =>{
    test ('#1 - positive interger: input "123", expect "121"', () => {
        let testInput = "123";
        expect(palindroneSequence(testInput)).toBe("121");
    });
    test ('#2 - positive interger: input 28, expect "33"', () => {
        let testInput = 28;
        expect(palindroneSequence(testInput)).toBe("33");
    });
    test ('#3 - positive interger: input "100000", expect "99999"', () => {
        let testInput = "100000";
        expect(palindroneSequence(testInput)).toBe("99999");
    });
    test ('#4 - returning smallest palindrone when tied: input "2", expect "1"', () => {
        let testInput = "2";
        expect(palindroneSequence(testInput)).toBe("1");
    });
    test ('#5 - negative integer: input "-28", expect "-33"', () => {
        let testInput = "-28";
        expect(palindroneSequence(testInput)).toBe("-33");
    });
    test ('#6 - null value: input "", expect "Invalid input message"', () => {
        let testInput = "";
        expect(palindroneSequence(testInput)).toBe("Invalid input: please enter a value");
    });
    test ('#7 - non digits: input "-AB.CD123", expect "Invalid input message"', () => {
        let testInput = "-AB.CD123";
        expect(palindroneSequence(testInput)).toBe("Invalid input: String must be an integer");
    });
    test ('#8 - non digits: input "-2-3", expect "Invalid input message"', () => {
        let testInput = "-AB.CD123";
        expect(palindroneSequence(testInput)).toBe("Invalid input: String must be an integer");
    });
});


