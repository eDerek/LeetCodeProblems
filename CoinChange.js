let count = 0;
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins.sort();
    go(coins.length-1, coins, amount);
    console.log(count);
    // console.log(Math.floor(5/2));
};

function go(currIdx, coins, amount){
    if(currIdx == 0 && amount % coins[currIdx] != 0){
        return -1;
    }
    if(amount % coins[currIdx] == 0){
        let temp = amount/coins[currIdx];
        count += temp;
        return temp
    }
    if(amount < coins[currIdx]){
        return go(currIdx-1, coins, amount);
    }

    for(let i=Math.floor(amount/coins[currIdx]);i>=0;i--){
        let temp = go(currIdx-1, coins, amount-coins[currIdx]*i);
        if(temp != -1){
            count += i;
            break;
        }
    }
};

// NOT finished yet-----------------

coinChange([2], 9);

coinChange([2,1,5], 7);