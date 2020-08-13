// Given an integer n, return the number of trailing zeroes in n!.

// Example 1:

// Input: 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Note: Your solution should be in logarithmic time complexity.

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if(n <= 0){
        return 0;
    }
    let result = 0;
    let x = 0;
    while(Math.pow(5, x) <= n){
        x++;
    }
    x--;
    for(let i=1;i<=x;i++){
        result += Math.floor(n/Math.pow(5, i));
    }
    return result;
};

console.log(trailingZeroes(19));
console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
console.log(trailingZeroes(30));
console.log(trailingZeroes(25));
console.log(trailingZeroes(88));