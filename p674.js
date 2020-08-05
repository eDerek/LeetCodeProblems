// Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

// Example 1:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
// Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
// Example 2:
// Input: [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length is 1. 

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let longest = 0;
    for(let i=0;i<nums.length;i++){
        let last = nums[i];
        let counter = 1;
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]>last){
                counter++;
                last = nums[j];
            }else{
                i = j-1;
                break;
            }
        }
        if(counter > longest){
            longest = counter;
        }
    }
    return longest;
};

console.log(findLengthOfLCIS([10,9,2,5,3,7,101,18]));
console.log(findLengthOfLCIS([1,3,5,4,7]));
console.log(findLengthOfLCIS([2,2,2,2,2]));
console.log(findLengthOfLCIS([1,3,5,7]));