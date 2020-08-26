// Given an array A of integers, return the length of the longest arithmetic subsequence in A.

// Recall that a subsequence of A is a list A[i_1], A[i_2], ..., A[i_k] with 0 <= i_1 < i_2 < ... < i_k <= A.length - 1, and that a sequence B is arithmetic if B[i+1] - B[i] are all the same value (for 0 <= i < B.length - 1).

 

// Example 1:

// Input: A = [3,6,9,12]
// Output: 4
// Explanation: 
// The whole array is an arithmetic sequence with steps of length = 3.
// Example 2:

// Input: A = [9,4,7,2,10]
// Output: 3
// Explanation: 
// The longest arithmetic subsequence is [4,7,10].
// Example 3:

// Input: A = [20,1,15,3,10,5,8]
// Output: 4
// Explanation: 
// The longest arithmetic subsequence is [20,15,10,5].
 

// Constraints:

// 2 <= A.length <= 1000
// 0 <= A[i] <= 500

/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    if(A.length <= 1){
        return 0;
    }
    let maxCount = 0;
    for(let i=0;i<A.length-1;i++){
        for(let j=i+1;j<A.length;j++){
            let diff = A[j]-A[i];
            let counter = 2;
            let last = A[j];
            for(let k=j+1;k<A.length;k++){
                if(A[k]-last == diff){
                    counter++;
                    last = A[k];
                }
            }
            if(counter>maxCount){
                maxCount = counter;
            }
        }
    }
    return maxCount;
};

console.log(longestArithSeqLength([3,6,9,12]));
console.log(longestArithSeqLength([9,4,7,2,10]));
console.log(longestArithSeqLength([20,1,15,3,10,5,8]));