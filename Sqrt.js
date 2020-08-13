// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.

let lastLeft = 0;
let lastRight = 0;
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    lastLeft = 0;
    lastRight = 0;
    return go(1,x,x);
};

function go(start, end, x){
    if(x == 2){
        return 1;
    }
    let p = Math.floor((end+start)/2);
    let temp = p*p;
    if(temp == x){
        return p;
    }
    if(lastRight == lastLeft+1){
        return lastLeft;
    }
    if(temp > x){
        lastRight = p;
        return go(start, p, x);
    }
    if(temp < x){
        lastLeft = p;
        return go(p, end, x);
    }
}

console.log(mySqrt(2));
console.log(mySqrt(3));
// console.log(mySqrt(4));
// console.log(mySqrt(8));
// console.log(mySqrt(9));
// console.log(mySqrt(10));
console.log(mySqrt(26));
console.log(mySqrt(35));
console.log(mySqrt(37));
console.log(mySqrt(120));
console.log(mySqrt(130));
console.log(mySqrt(140));
console.log(mySqrt(150));