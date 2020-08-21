// Write a program to find the n-th ugly number.

// Ugly numbers are positive integers which are divisible by a or b or c.

 

// Example 1:

// Input: n = 3, a = 2, b = 3, c = 5
// Output: 4
// Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.
// Example 2:

// Input: n = 4, a = 2, b = 3, c = 4
// Output: 6
// Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.
// Example 3:

// Input: n = 5, a = 2, b = 11, c = 13
// Output: 10
// Explanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10.
// Example 4:

// Input: n = 1000000000, a = 2, b = 217983653, c = 336916467
// Output: 1999999984
 

// Constraints:

// 1 <= n, a, b, c <= 10^9
// 1 <= a * b * c <= 10^18
// It's guaranteed that the result will be in range [1, 2 * 10^9]

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
    let tempArray = [a,b,c].sort(function(x,y){
        return x-y;
    });
    a = tempArray[0];
    b = tempArray[1];
    c = tempArray[2];
    let pa = 0;
    let pb = b;
    let pc = c;
    let counter = 0;
    let x = 0;
    let bPlused = false;
    let cPlused = false;
    // let aaa = [];
    while(counter < n){
        bPlused = false;
        cPlused = false;
        pa += a;
        counter++;
        // aaa.push(a+'-'+pa);
        if(pa<pb && pa<pc){
            continue;
        }
        if(pa > pb){
            counter++;
            // aaa.push(b+'-'+pb);
            pb += b;
            bPlused = true;
        }
        if(pa == pb){
            pb += b;
        }
        if(b == c){
            continue;
        } 
        if(pa > pc){
            if(bPlused && pc != pb-b){
                counter++;
                // aaa.push(c+'-'+pc);
                cPlused = true;
            }
            if(!bPlused){
                counter++;
                // aaa.push(c+'-'+pc+'##');
                cPlused = true;
            }
            pc += c;
        }
        if(pa == pc){
            pc += c;
        }
    }
    if(counter == n){
        x = pa;
    }
    if(counter == n+2){
        x = pb-b<pc-c?pb-b:pc-c;
    }
    if(counter == n+1){
        if(bPlused){
            x = pb-b;
        }
        if(cPlused){
            x = pc-c;
        }
    }
    // console.log(aaa);
    return x;
};

// Not finished---------------------------
console.log(nthUglyNumber(3,2,3,5));
console.log(nthUglyNumber(4,2,3,4));
console.log(nthUglyNumber(5,2,11,13));
// console.log(nthUglyNumber(1000000000,2,217983653,336916467));
console.log(nthUglyNumber(5,2,3,3));
console.log(nthUglyNumber(12,10,3,5));
console.log(nthUglyNumber(10000,5993,6366,7854)); // Wrong Answer. Expected : 22166412

// 10000
// 5993
// 6366
// 7854