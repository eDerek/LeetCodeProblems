// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...
// Example 1:

// Input: "A"
// Output: 1
// Example 2:

// Input: "AB"
// Output: 28
// Example 3:

// Input: "ZY"
// Output: 701
 

// Constraints:

// 1 <= s.length <= 7
// s consists only of uppercase English letters.
// s is between "A" and "FXSHRXW".

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let result = 0;
    for(let i=0;i<s.length;i++){
        let num = s.charCodeAt(i)-64;
        result += num*Math.pow(26, s.length-i-1);
    }
    return result;
};

console.log(titleToNumber('A'));
console.log(titleToNumber('B'));
console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));