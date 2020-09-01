// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.



// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

// Example:

// Input: 4
// Output: [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

let dirctions = [[1,1],[-1,-1],[1,-1],[-1,1],[1,0],[-1,0],[0,1],[0,-1]];
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if(n == 1){
        return [['Q']];
    }
    if(n == 2 || n == 3){
        return [];
    }
    let result = [];
    let s = [];
    for(let i=0;i<n;i++){
        let row = [];
        s.push(row);
        for(let j=0;j<n;j++){
            row.push('.');
        }
    }
    go(s, result, 0, 0);
    return result;
};

function go(s, result, x, y){
    if(x == s.length || y == s.length){
        return;
    }
    if(check(s, x, y)){
        s[x][y] = 'Q';
        if(x == s.length-1){
            result.push(_2dTo1d(s));
        }
        go(s,result, x+1,0);
    }
    // else{
    //     go(s,result, x,y+1);
    // }

    s[x][y] = '.';
    go(s,result,x,y+1);
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

function _2dTo1d(s){
    let result = [];
    for(let i=0;i<s.length;i++){
        let tempStr = '';
        for(let j=0;j<s[i].length;j++){
            tempStr = tempStr+s[i][j];
        }
        result.push(tempStr);
    }
    return result;
}

// console.log(solveNQueens(3));
// let xxx = solveNQueens(4);
// console.log(solveNQueens(5));
// console.log(solveNQueens(6));
// console.log(solveNQueens(7));
let xxx = solveNQueens(8);

for(let xx of xxx){
    for(let x of xx){
        console.log(x);
    }
    console.log('----------------')
}
console.log(xxx.length);