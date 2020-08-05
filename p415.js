// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if(num1.length < num2.length){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    let arrayLong = num1.split('').reverse();
    let arrayShort = num2.split('').reverse();
    let x = 0;
    for(let i=0;i<arrayLong.length;i++){
        let temp = null;
        if(i<arrayShort.length){
            temp = Number(arrayLong[i])+Number(arrayShort[i])+x;
        }else{
            temp = Number(arrayLong[i])+x;
        }
        
        if(temp >= 10){
            x = 1;
            arrayLong[i] = (temp-10).toString();
        }else{
            x = 0;
            arrayLong[i] = temp.toString();
        }
    }
    return x == 0 ? arrayLong.reverse().join('') : '1'+arrayLong.reverse().join('');
};

console.log(addStrings('1234','99999'));