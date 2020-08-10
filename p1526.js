// 1526. Minimum Number of Increments on Subarrays to Form a Target Array

// Given an array of positive integers target and an array initial of same size with all zeros.

// Return the minimum number of operations to form a target array from initial if you are allowed to do the following operation:

// Choose any subarray from initial and increment each value by one.
// The answer is guaranteed to fit within the range of a 32-bit signed integer.
 

// Example 1:

// Input: target = [1,2,3,2,1]
// Output: 3
// Explanation: We need at least 3 operations to form the target array from the initial array.
// [0,0,0,0,0] increment 1 from index 0 to 4 (inclusive).
// [1,1,1,1,1] increment 1 from index 1 to 3 (inclusive).
// [1,2,2,2,1] increment 1 at index 2.
// [1,2,3,2,1] target array is formed.
// Example 2:

// Input: target = [3,1,1,2]
// Output: 4
// Explanation: (initial)[0,0,0,0] -> [1,1,1,1] -> [1,1,1,2] -> [2,1,1,2] -> [3,1,1,2] (target).
// Example 3:

// Input: target = [3,1,5,4,2]
// Output: 7
// Explanation: (initial)[0,0,0,0,0] -> [1,1,1,1,1] -> [2,1,1,1,1] -> [3,1,1,1,1] 
//                                   -> [3,1,2,2,2] -> [3,1,3,3,2] -> [3,1,4,4,2] -> [3,1,5,4,2] (target).
// Example 4:

// Input: target = [1,1,1,1]
// Output: 1

let result = 0;
/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
    result = 0;
    go(target, 0, target.length-1);
    return result;
};

function go(target, x, y){
    if(x > y){
        return;
    }
    let breakPoints = [];
    let min = getMin(target, x, y);
    for(let i=x;i<=y;i++){
        target[i] = target[i]-min;
        if(target[i] == 0){
            breakPoints.push(i);
        }
    }
    result += min;
    // console.log(target);
    // console.log(breakPoints,'------');

    if(breakPoints.length == y-x+1){
        return;
    }
    if(breakPoints.length == 0){
        // Would not be here-----------
        // go(target);
    }else{
        // 1 break point makes 2 subarray, 2 break points make 3 subarrays, ........
        if(breakPoints[0] - 1 >= x){
            // let subArray = getSubArray(x, breakPoints[0] - 1, target)
            go(target, x, breakPoints[0] - 1);
        }
        for(let j=1;j<breakPoints.length;j++){
            let start = breakPoints[j-1]+1;
            let end = breakPoints[j]-1;
            // console.log(start, end, '#####');
            if(start <= end){
                // let subArray = getSubArray(start, end, target);
                go(target, start, end);
            }
        }
        if(breakPoints[breakPoints.length-1] + 1 <= y){
            // let subArray = getSubArray(breakPoints[breakPoints.length-1] + 1, y, target)
            go(target, breakPoints[breakPoints.length-1] + 1, y);
        }
    }
}

// function getSubArray(start, end, target){
//     let subArray = [];
//     for(let k = start;k<=end;k++){
//         subArray.push(target[k]);
//     }
//     return subArray;
// }

function getMin(target, x, y){
    let min = target[x];
    for(let i=x;i<=y;i++){
        if(target[i] < min){
            min = target[i];
        }
    }
    return min;
}

console.log(minNumberOperations([1,2,3,2,1]));
console.log(minNumberOperations([3,1,1,2]));
console.log(minNumberOperations([3,1,5,4,2]));
console.log(minNumberOperations([1,1,1,1]));