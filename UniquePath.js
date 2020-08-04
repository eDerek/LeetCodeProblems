/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return go(m, n);
};

function go(currX, currY){
    // if(currX == 1 && currY == 1){
    //     return 1;
    // }

    // if(currX == 1 && currY == 2){
    //     return 1;
    // }
    // if(currX == 2 && currY == 1){
    //     return 1;
    // }

    if(currX == 1 || currY == 1){
        return 1;
    }

    if(currX > 1 && currY > 1){
        // console.log(currX + '--' +currY);
        return go(currX-1, currY) + go(currX, currY-1);
    }
    // else if(currX == 1){
    //     return go(1, currY-1);
    // }else{
    //     return go(currX-1, 1);
    // }
};

// currX++;
    // if(currX > m){
    //     return;
    // }
    // if(currX == m && currY == n){
    //     count++;
    //     return;
    // }
    // go(currX, currY, m, n);

    // currY++;
    // if(currY > n){
    //     return;
    // }
    // if(currX == m && currY == n){
    //     count++;
    //     return;
    // }
    // go(currX, currY, m, n);

console.log(uniquePaths(2,2));
console.log(uniquePaths(3,3));
console.log(uniquePaths(3,2));
console.log(uniquePaths(7,3));
console.log(uniquePaths(51,9));