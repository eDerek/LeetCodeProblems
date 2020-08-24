// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length == 0){
        return 0;
    }
    let result = 0;
    let currLeftMax = -1;
    let currRightMax = getLastMaxIdx(0, height.length-1, height);
    while(true){
        if(currRightMax == 0){
            break;
        }
        currLeftMax = getFirstMaxIdx(0, currRightMax-1, height);
        result += calVolumn(currLeftMax, currRightMax, height);
        currRightMax = currLeftMax;
    }
    currLeftMax = getLastMaxIdx(0, height.length-1, height);
    currRightMax = -1;
    while(true){
        if(currLeftMax == height.length-1){
            break;
        }
        currRightMax = getLastMaxIdx(currLeftMax+1, height.length-1, height);
        result += calVolumn(currLeftMax, currRightMax, height);
        currLeftMax = currRightMax;
    }
    return result;
};

function calVolumn(start, end, ha){
    if(start >= end){
        console.error('----------');
        return null;
    }
    let lowerNum = ha[start] >= ha[end]? ha[end] : ha[start];
    let spanWidth = end - start - 1;
    let result = lowerNum*spanWidth;
    for(let i=start+1;i<end;i++){
        result -= ha[i];
    }
    return result;
}

function getFirstMaxIdx(start, end, ha){
    if(start > end){
        console.error('####');
        return null;
    }
    let result = start;
    for(let i=start+1;i<=end;i++){
        if(ha[i] > ha[result]){
            result = i;
        }
    }
    return result;
}

function getLastMaxIdx(start, end, ha){
    if(start > end){
        console.error('^^^^');
        return null;
    }
    let result = start;
    for(let i=start+1;i<=end;i++){
        if(ha[i] >= ha[result]){
            result = i;
        }
    }
    return result;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));