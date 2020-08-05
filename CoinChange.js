let count = 0;
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount == 0){
        return 0;
    }
    count = 0
    coins.sort(function(a, b) {
        return a - b;
    });
    // console.log(coins,'--------');
    go(coins.length-1, coins, amount);
    return count == 0 ? -1 : count;
};

function go(currIdx, coins, amount){
    if(currIdx == 0 && amount % coins[currIdx] != 0){
        return -1;
    }
    if(amount % coins[currIdx] == 0){
        let temp = amount/coins[currIdx];
        count += temp;
        console.log(coins[currIdx]+' x '+temp);
        return temp
    }
    if(amount < coins[currIdx]){
        let temp = go(currIdx-1, coins, amount);
        // if(temp != -1){
        //     count ++;
        // }
        return temp;
    }

    for(let i=Math.floor(amount/coins[currIdx]);i>=0;i--){
        // console.log(coins, amount-coins[currIdx]*i);
        let temp = go(currIdx, coins, amount-coins[currIdx]*i);
        if(temp != -1){
            count += i;
            console.log(coins[currIdx]+' * '+i);
            break;
        }
    }
};

// NOT finished yet-----------------

// console.log(coinChange([2], 8));

// console.log(coinChange([2,1,5], 11));

console.log(coinChange([2,1,10,5], 28));

// console.log(coinChange([186,419,83,408], 6249));
