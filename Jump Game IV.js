// Given an array of integers arr, you are initially positioned at the first index of the array.

// In one step you can jump from index i to index:

// i + 1 where: i + 1 < arr.length.
// i - 1 where: i - 1 >= 0.
// j where: arr[i] == arr[j] and i != j.
// Return the minimum number of steps to reach the last index of the array.

// Notice that you can not jump outside of the array at any time.

 

// Example 1:

// Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
// Output: 3
// Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.
// Example 2:

// Input: arr = [7]
// Output: 0
// Explanation: Start index is the last index. You don't need to jump.
// Example 3:

// Input: arr = [7,6,9,6,9,6,9,7]
// Output: 1
// Explanation: You can jump directly from index 0 to index 7 which is last index of the array.
// Example 4:

// Input: arr = [6,1,9]
// Output: 2
// Example 5:

// Input: arr = [11,22,7,7,7,7,7,7,7,22,13]
// Output: 3
 

// Constraints:

// 1 <= arr.length <= 5 * 10^4
// -10^8 <= arr[i] <= 10^8

/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    let valuePositionsMap = getValuePositionsMap(arr);
    // console.log(valuePositionsMap);
    let mySet = new Set();
    mySet.add(0);
    let aoArray = [0];
    let counter = 0;
    while(!mySet.has(arr.length-1)){
        counter++;
        let newArray = [];
        for(let currP of aoArray){
            for(let item of findAllOptions(arr, currP, mySet, valuePositionsMap)){
                newArray.push(item);
                mySet.add(item);
                if(item == arr.length-1){
                    break;
                }
            }
            if(mySet.has(arr.length-1)){
                break;
            }
        }
        aoArray = newArray;
    }
    return counter;
};

// This will speed up the progress greatly
function getValuePositionsMap(arr){
    let result = new Map();
    for(let i=arr.length-1;i>=0;i--){
        if(!result.has(arr[i])){
            result.set(arr[i], []); 
        }
        result.get(arr[i]).push(i);
    }
    return result;
}

function findAllOptions(arr, currP, mySet, valuePositionsMap){
    let result = [];
    if(currP > 0 && arr[currP-1] != arr[currP] && !mySet.has(currP-1)){
        result.push(currP-1);
    }
    if(currP < arr.length-1 && arr[currP+1] != arr[currP] && !mySet.has(currP+1)){
        result.push(currP+1);
    }
    if(valuePositionsMap.has(arr[currP])){
        for(let i of valuePositionsMap.get(arr[currP])){
            if(i != currP && !mySet.has(i)){
                result.push(i);
            }
        }
        valuePositionsMap.delete(arr[currP]);
    }
    return result;
}

console.log(minJumps([100,-23,-23,404,100,23,23,23,3,404]));
console.log(minJumps([7]));
console.log(minJumps([7,6,9,6,9,6,9,7]));
console.log(minJumps([6,1,9]));
console.log(minJumps([11,22,7,7,7,7,7,7,7,22,13]));