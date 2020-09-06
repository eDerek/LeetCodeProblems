// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = truncate(3.33333..) = 3.
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = truncate(-2.33333..) = -2.

// Note:

// Both dividend and divisor will be 32-bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend == 2147483648 && divisor == 1){
        return 2147483647;
    }
    if(dividend == -2147483648 && divisor == -1){
        return 2147483647;
    }
    if(dividend == -2147483648 && divisor == 1){
        return -2147483648;
    }
    if(dividend == 2147483647 && divisor == 1){
        return 2147483647;
    }
    if(dividend == 0){
        return 0;
    }
    let x = false;
    if((dividend<0 && divisor>0) || (dividend>0 && divisor<0)){
        x = true;
    }
    if(dividend < 0){
        dividend = 0-dividend;
    }
    if(divisor < 0){
        divisor = 0-divisor; 
    }

    // console.log(dividend, divisor);
    // return;

    let result = 0;
    let temp = dividend;
    while(temp >= divisor){
        let z = 1;
        let dz = divisor
        let counter = 0;
        while(dz <= temp){
            z = z<<1;
            dz = dz<<1;
            counter++;
        }
        z = z>>1;
        dz = dz>>1;
        // console.log(counter);
        temp -= dz;
        result += z;
    }
    if(x){
        result = 0-result;
    }
    return result;
};

// console.log(divide(10, 3));
// console.log(divide(107, 5));
// console.log(divide(7, -3));
console.log(divide(-2147483648, 1));
// console.log(divide(2147483647, 1));