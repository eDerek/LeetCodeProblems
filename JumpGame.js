// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

// Constraints:

// 1 <= nums.length <= 3 * 10^4
// 0 <= nums[i][j] <= 10^5

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length == 1){
        return true;
    }
    return go(0, nums, new Set());
};

function go(currP, nums, badSet){
    if(currP < nums.length){
        // console.log(currP);
        if(badSet.has(currP)){
            return false;
        }
        if(nums[currP] == 0 && currP != nums.length-1){
            return false;
        }
        if(currP + nums[currP] >= nums.length-1){
            return true;
        }
        let num = nums[currP];
        let temp = currP;
        for(let i=1;i<=num;i++){
            currP++;
            if(badSet.has(currP)){
                continue;
            }
            let x = go(currP, nums, badSet);
            if(x){
                return true;
            }
        }
        badSet.add(temp);
    }
    return false;
}

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.log(canJump([2,0,0]));
console.log(canJump([3,0,8,2,0,0,1]));