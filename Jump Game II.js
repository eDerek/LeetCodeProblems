// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// Example:

// Input: [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
//     Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Note:

// You can assume that you can always reach the last index.

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let stepCount = 0;
    let mySet = new Set();
    let newAddedSet = new Set();
    mySet.add(0);
    newAddedSet.add(0);
    while(!newAddedSet.has(nums.length-1)){
        stepCount++;
        newAddedSet = nextStep(nums, mySet, setToSortedArray(newAddedSet));
    }
    return stepCount;
};

function setToSortedArray(sourceSet){
    let resultArray = [];
    for(let item of sourceSet){
        resultArray.push(item);
    }
    resultArray.sort(function(a,b){
        return b-a;
    });
    return resultArray;
}

function nextStep(nums, mySet, newAddedArray){
    let tempSet = new Set();
    for(let idx of newAddedArray){
        if(idx + nums[idx] >= nums.length-1){
            tempSet.add(nums.length-1);
            return tempSet;
        }
        for(let i=1;i<=nums[idx];i++){
            let x = idx + i;
            if(!mySet.has(x)){
                tempSet.add(x);
                mySet.add(x);
            }
        }
    }
    return tempSet;
}

console.log(jump([2,3,1,1,4]));