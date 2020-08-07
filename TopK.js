// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
// It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let tempMap = {};
    for(let n of nums){
        let nStr = n.toString();
        if(tempMap[nStr]){
            tempMap[nStr] = tempMap[nStr] + 1;
        }else{
            tempMap[nStr] = 1;
        }
    }
    console.log(tempMap);
    let entryArray = [];
    for(let key in tempMap){
        entryArray.push([key,tempMap[key]]);
    }
    entryArray.sort(function(a, b) {
        return b[1] - a[1];
    });
    let result = [];
    for(let i=0;i<k;i++){
        result.push(parseInt(entryArray[i][0]));
    }
    return result;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));