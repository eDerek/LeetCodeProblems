// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    // 'sort' is not necessary-----------
    candidates.sort(function(a,b){
        return a-b;
    });
    // console.log(candidates);
    go(candidates, 0, [], result, target, new Set());
    return result;
};

function go(candidates, currIdx, solution, result, target, mySet){
    if(target == 0){
        let tempStr = solution.toString();
        if(!mySet.has(tempStr)){
            result.push(Array.from(solution));
            mySet.add(tempStr);
        }
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
    // not necessary-------------may be faster
    if(target < currItem){
        return;
    }
    for(let i=0;i<=1;i++){
        if(i>0){
            solution.push(currItem);
        }
        let tempSolution = Array.from(solution);
        go(candidates, currIdx+1, solution, result, target-currItem*i, mySet);
        solution = tempSolution;
    }
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8));
console.log(combinationSum2([2,5,2,1,2], 5));