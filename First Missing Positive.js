// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1
// Follow up:

// Your algorithm should run in O(n) time and uses constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let min = 1;
    let max = 1;
    let counter = 0;
    let myMap = {};
    for(let num of nums){
        if(num <= 0){
            continue;
        }
        if(num < min){
            min = num;
        }
        if(num > max){
            max = num;
        }
        let numStr = num.toString();
        if(!myMap[numStr]){
            myMap[numStr] = true;
            counter++;
        }
    }
    if(counter == 0){
        return 1;
    }
    if(max - min + 1 == counter){
        if(min == 1){
            return max+1;
        }else{
            return 1;
        }
    }
    for(let i=min;i<=max;i++){
        if(!myMap[i.toString()]){
            return i;
        }
    }
};

console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([7,8,9,11,12]));