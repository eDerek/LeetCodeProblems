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
    result[0] = go(nums, target, pos1, pos2, 0);
    result[1] = go(nums, target, pos1, pos2, 1);
    return result;
};

function go(nums, target, pos1, pos2, mode){
    while(true){
        // console.log(pos1,pos2);
        let middlePos = pos1 + Math.floor((pos2-pos1)/2);
        // console.log(middlePos+'---------');
        if(nums[middlePos] == target){
            if(mode == 0 && (middlePos == 0 || nums[middlePos-1] != target)){
                return middlePos;
            }
            if(mode == 1 && (middlePos == nums.length-1 || nums[middlePos+1] != target)){
                return middlePos;
            }
            if(mode == 0){
                pos2 = middlePos - 1;
                continue;
            }
            if(mode == 1){
                pos1 = middlePos + 1;
                continue;
            }
        }
        if(nums[middlePos] < target){
            pos1 = middlePos + 1;
        }else{
            pos2 = middlePos - 1;
        }
        if(pos1 > pos2){
            return -1;
        }
    }
}

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([5,6], 6));
console.log(searchRange([], 6));