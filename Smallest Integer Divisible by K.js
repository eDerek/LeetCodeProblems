// Given a positive integer K, you need find the smallest positive integer N such that N is divisible by K, and N only contains the digit 1.

// Return the length of N.  If there is no such N, return -1.

 

// Example 1:

// Input: 1
// Output: 1
// Explanation: The smallest answer is N = 1, which has length 1.
// Example 2:

// Input: 2
// Output: -1
// Explanation: There is no such positive integer N divisible by 2.
// Example 3:

// Input: 3
// Output: 3
// Explanation: The smallest answer is N = 111, which has length 3.
 

// Note:

// 1 <= K <= 10^5

/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
    if(K%2 == 0 || K%5 == 0){
        return -1;
    }
    let result = 0;
    let m = 0;
    let mySet = new Set();
    while(true){
        if(m == 0 && result > 0){
            return result;
        }
        m = (m*10+1)%K;
        result++;
        if(mySet.has(m)){
            return -1;
        }
        mySet.add(m);
    }
};

console.log(smallestRepunitDivByK(1));
console.log(smallestRepunitDivByK(2));
console.log(smallestRepunitDivByK(3));
console.log(smallestRepunitDivByK(4));
console.log(smallestRepunitDivByK(5));
console.log(smallestRepunitDivByK(6));
console.log(smallestRepunitDivByK(7));
console.log(smallestRepunitDivByK(8));
console.log(smallestRepunitDivByK(9));
console.log(smallestRepunitDivByK(39));
console.log(smallestRepunitDivByK(41));