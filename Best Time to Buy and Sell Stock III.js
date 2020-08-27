// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete at most two transactions.

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

 

// Example 1:

// Input: prices = [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
// Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// Example 4:

// Input: prices = [1]
// Output: 0

 

// Constraints:

//     1 <= prices.length <= 105
//     0 <= prices[i] <= 105

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2){
        return 0;
    }
    let tempArray = [prices[0]];
    let tempLast = prices[0];
    for(let i=1;i<prices.length;i++){
        if(prices[i] == tempLast){
            continue;
        }
        tempArray.push(prices[i]);
        tempLast = prices[i];
    }
    prices = tempArray;
    // console.log(prices);
    if(prices.length < 2){
        return 0;
    }
    let result = 0;
    let valleyIdxes = [];
    let peakIdxes = [];
    for(let i=0;i<prices.length;i++){
        if(i == 0 && prices[1] > prices[0]){
            valleyIdxes.push(0);
            continue;
        }else if(i == 0 && prices[1] < prices[0]){
            peakIdxes.push(0);
            continue;
        }
        if(i == prices.length-1 && prices[i] > prices[i-1]){
            peakIdxes.push(i);
            break;
        }
        if(i == prices.length-1 && prices[i] < prices[i-1]){
            valleyIdxes.push(i);
            break;
        }
        if(prices[i-1]<prices[i] && prices[i]>prices[i+1]){
            peakIdxes.push(i);
            continue;
        }
        if(prices[i-1]>prices[i] && prices[i]<prices[i+1]){
            valleyIdxes.push(i);
        }
    }
    // console.log(valleyIdxes,peakIdxes);
    if(valleyIdxes.length+peakIdxes.length == 2){
        if(valleyIdxes[0] < peakIdxes[0]){
            return prices[peakIdxes[0]]-prices[valleyIdxes[0]];
        }else{
            return 0;
        }
    }
    for(let i1=0;i1<valleyIdxes.length;i1++){
        for(let j1=0;j1<peakIdxes.length;j1++){
            if(peakIdxes[j1] < valleyIdxes[i1] || prices[peakIdxes[j1]] < prices[valleyIdxes[i1]]){
                continue;
            }
            let firstP = prices[peakIdxes[j1]]-prices[valleyIdxes[i1]];
            let tempP = firstP;
            // console.log(firstP+'-----');
            // let secondP = 0;
            for(let i2=i1+1;i2<valleyIdxes.length;i2++){
                if(valleyIdxes[i2] < peakIdxes[j1]){
                    continue;
                }
                for(let j2=j1+1;j2<peakIdxes.length;j2++){
                    if(peakIdxes[j2] < valleyIdxes[i2] || prices[peakIdxes[j2]] < prices[valleyIdxes[i2]]){
                        continue;
                    }
                    tempP = firstP+(prices[peakIdxes[j2]]-prices[valleyIdxes[i2]]);
                    if(tempP > result){
                        result = tempP;
                    }
                }
            }
            if(firstP == tempP && tempP > result){
                result = tempP;
            }
        }
    }
    return result;
};

// Time Limit Exceeded----------------------------------------------
console.log(maxProfit([3,3,5,0,0,3,1,4]));
// console.log(maxProfit([1,2,3,4,5]));
// console.log(maxProfit([7,6,4,3,1]));
// console.log(maxProfit([1]));
console.log(maxProfit([1,4,2]));
