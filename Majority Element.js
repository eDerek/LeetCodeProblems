// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length == 1){
        return nums[0];
    }
    let target = Math.floor(nums.length/2);
    let map = {};
    for(let num of nums){
        let numStr = num.toString();
        if(map[numStr]){
            if(map[numStr] == target){
                return num;
            }
            map[numStr]++;
        }else{
            map[numStr] = 1;
        }
    }
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));