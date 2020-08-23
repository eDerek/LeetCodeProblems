// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
};

function calVolumn(start, end, ha){
    if(start == end){
        console.error('----------');
        return null;
    }
    let lowerNum = ha[start] >= ha[end]? ha[end] : ha[start];
    let temp = start - end;
    let spanWidth = temp>0?temp-1: -1*temp-1;
    let result = lowerNum*spanWidth;
    ---
    return result;
}

function getMaxIdx(start, end, ha){
    let result = start;
    for(let i=start+1;i<=end;i++){
        if(ha[i] > ha[result]){
            result = i;
        }
    }
    return result;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));