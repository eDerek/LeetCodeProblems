// Write a program to find the n-th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

// Example:

// Input: n = 10
// Output: 12
// Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
// Note:  

// 1 is typically treated as an ugly number.
// n does not exceed 1690.

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if(n == 1){
        return 1;
    }
    let mySet = new Set();
    mySet.add(1);
    go([1], mySet, n);
    let tempArray = Array.from(mySet);
    tempArray.sort(function(a,b){
        return a-b;
    });
    return tempArray[n-1];
};

function go(myQueue, mySet, n){
    let newQueue = [];
    for(let item of myQueue){
        let x = item*2;
        if(!mySet.has(x)){
            newQueue.push(x);
            mySet.add(x);
        }
        
        let y = item*3;
        if(!mySet.has(y)){
            newQueue.push(y);
            mySet.add(y);
        }
        
        let z = item*5;
        if(!mySet.has(z)){
            newQueue.push(z);
            mySet.add(z);
        }
    }
    if(mySet.size >= n){
        newQueue.sort(function(a,b){
            return a-b;
        });
        let target = newQueue[newQueue.length-1];
        ha(newQueue, mySet, target);
        return;
    }
    go(newQueue, mySet, n);
}

function ha(myQueue, mySet, target){
    let newQueue = [];
    for(let item of myQueue){
        let x = item*2;
        if(!mySet.has(x) && x< target){
            newQueue.push(x);
            mySet.add(x);
        }
        let y = item*3;
        if(!mySet.has(y) && y < target){
            newQueue.push(y);
            mySet.add(y);
        }
        let z = item*5;
        if(!mySet.has(z) && z < target){
            newQueue.push(z);
            mySet.add(z);
        }
    }
    if(newQueue.length == 0){
        return;
    }
    ha(newQueue, mySet, target);
}

// Correct results but very slow and stupid algorithm-----------------
console.log(nthUglyNumber(1));
console.log(nthUglyNumber(2));
console.log(nthUglyNumber(3));
console.log(nthUglyNumber(4));
console.log(nthUglyNumber(5));
console.log(nthUglyNumber(6));
console.log(nthUglyNumber(7));
console.log(nthUglyNumber(8));
console.log(nthUglyNumber(9));
console.log(nthUglyNumber(10));
console.log(nthUglyNumber(11));
console.log(nthUglyNumber(12));
console.log(nthUglyNumber(100));
console.log(nthUglyNumber(300));
console.log(nthUglyNumber(500));