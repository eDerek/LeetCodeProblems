// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:

// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]
 

// Constraints:

// 1 <= candidates.length <= 30
// 1 <= candidates[i] <= 200
// Each element of candidate is unique.
// 1 <= target <= 500

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    // candidates.sort(function(a,b){
    //     return b-a;
    // });
    // console.log(candidates);
    go(candidates, 0, [], result, target);
    return result;
};

function go(candidates, currIdx, solution, result, target){
    if(target == 0){
        result.push(Array.from(solution));
        // console.log(solution, '--------------------');
        return;
    }
    if(currIdx == candidates.length){
        return;
    }
    let currItem = candidates[currIdx];
    if(currIdx == candidates.length-1 && target%currItem != 0){
        return;
    }
    // if(target < currItem){
    //     return go(candidates, currIdx+1, solution, result, target);
    // }
    for(let i=0;i<=Math.floor(target/currItem);i++){
        if(i>0){
            solution.push(currItem);
        }
        let tempSolution = Array.from(solution);
        go(candidates, currIdx+1, solution, result, target-currItem*i);
        solution = tempSolution;
    }
}

console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2,3,5], 8));
console.log(combinationSum([2,3,5], 9));
console.log(combinationSum([2,3,5], 10));
console.log(combinationSum([2], 8));
console.log(combinationSum([2], 7));