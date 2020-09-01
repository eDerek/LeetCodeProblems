// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.



// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

// Example:

// Input: 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
// [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]

let dirctions = [[1,1],[-1,-1],[1,-1],[-1,1]];
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    if(n == 1){
        return 1;
    }
    if(n == 2 || n == 3){
        return 0;
    }
    let result = {counter : 0};
    let s = [];
    let yArray = [];
    for(let i=0;i<n;i++){
        yArray.push(0);
        let row = [];
        s.push(row);
        for(let j=0;j<n;j++){
            row.push('.');
        }
    }
    
    go(s, result, 0, 0, yArray);
    return result.counter;
};

function go(s, result, x, y, yArray){
    if(x == s.length || y == s.length){
        return;
    }
    if(check(s, x, y)){
        s[x][y] = 'Q';
        yArray[y] = 1;
        if(x == s.length-1){
            result.counter++;
        }
        let newY = pickY(yArray, s.length);
        if(newY != -1){
            go(s,result, x+1,newY,yArray);
        }
    }
    // else{
    //     go(s,result, x,y+1,yArray);
    // }

    s[x][y] = '.';
    yArray[y] = 0;
    let tempY = -1;
    for(let i=y+1;i<s.length;i++){
        if(yArray[i] == 0){
            tempY = i;
            break;
        }
    }
    if(tempY != -1){
        go(s,result,x,tempY,yArray);
    }
}

function pickY(yArray, n){
    for(let i=0;i<n;i++){
        if(yArray[i] == 0){
            return i;
        }
    }
    return -1;
}

function check(s, x, y){
    // console.log(s, x, y);
    
    for(let d of dirctions){
        let a = x;
        let b = y;
        while(a>=0 && a<s.length && b>=0 && b<s.length){
            if(s[a][b] == 'Q'){
                // console.log('###');
                return false;
            }
            a += d[0];
            b += d[1];
        }
    }
    // console.log('---');
    return true;
}

// console.log(totalNQueens(3));
// console.log(totalNQueens(4));
// console.log(totalNQueens(5));
// console.log(totalNQueens(6));
// console.log(totalNQueens(7));
console.log(totalNQueens(8));