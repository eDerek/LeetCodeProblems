// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1,-1];
    let pos1 = 0;
    let pos2 = nums.length-1;
    while(true){
        let middlePos = pos1 + Math.floor((pos2-pos1)/2);
        if(nums[middlePos] == target){
            if((middlePos == 0 || nums[middlePos-1] != target)){
                result[0] = middlePos;
                break;
            }
            // if((middlePos == nums.length-1 || nums[middlePos+1] != target)){
            //     result[1] = middlePos;
            // }
            // break;
        }
        if(nums[middlePos] < target){
            pos1 = middlePos + 1;
        }else{
            pos2 = middlePos - 1;
        }
        if(pos1 == pos2 || pos1+1 == pos2){
            break;
        }
    }
    return result;
};

// NOT finished yet--------------
console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));