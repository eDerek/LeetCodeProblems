// Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map, compute the volume of water it is able to trap after raining.

// Example:

// Given the following 3x6 height map:
// [
//   [1,4,3,1,3,2],
//   [3,2,1,3,2,4],
//   [2,3,3,2,3,1]
// ]

// Return 4.

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    if(heightMap.length == 0){
        return 0;
    }
    let result = 0;
    let sortedHeightArray = getSortedHeightArray(heightMap);
    for(let i=0;i<sortedHeightArray.length-1;i++){
        let area = calArea(sortedHeightArray[i], heightMap);
        let heightDiff = sortedHeightArray[i]-sortedHeightArray[i+1];
        result += area*heightDiff;
    }
    return result;
};

function calArea(height, heightMap){
    let area = 0;
    let bitMap = getBitMapByHeight(height, heightMap);

    // for(let temp of bitMap){
    //     console.log(temp);
    // }
    // console.log('******');

    for(let i=0;i<bitMap[0].length;i++){
        gogo(0, i, bitMap);
        gogo(bitMap.length-1, i, bitMap);
    }
    for(let i=0;i<bitMap.length;i++){
        gogo(i, 0, bitMap);
        gogo(i, bitMap[0].length-1, bitMap);
    }

    // for(let temp of bitMap){
    //     console.log(temp);
    // }

    for(let row of bitMap){
        for(let item of row){
            if(item == 0){
                area++;
            }
        }
    }

    // console.log(area);
    // console.log('-------------');
    return area;
}

function gogo(x, y, bitMap){
    if(x<0 || x>=bitMap.length || y<0 || y>=bitMap[0].length){
        return;
    }
    if(bitMap[x][y] != 0){
        return;
    }
    bitMap[x][y] = -1;
    gogo(x-1, y, bitMap);
    gogo(x+1, y, bitMap);
    gogo(x, y-1, bitMap);
    gogo(x, y+1, bitMap);
}

function getBitMapByHeight(height, heightMap){
    let bitMap = [];
    for(let row of heightMap){
        let bitRow = [];
        bitMap.push(bitRow);
        for(let item of row){
            if(item >= height){
                bitRow.push(1);
            }else{
                bitRow.push(0);
            }
        }
    }
    return bitMap;
}

function getSortedHeightArray(heightMap){
    let heightSet = new Set();
    // let x = heightMap[0].length;
    // let y = heightMap.length;
    for(let row of heightMap){
        for(let item of row){
            heightSet.add(item);
        }
    }
    let result = Array.from(heightSet);
    result.sort(function(a, b){
        return b-a;
    });
    return result;
}

console.log(trapRainWater([
    [1,4,3,1,3,2],
    [3,2,1,3,2,4],
    [2,3,3,2,3,1]
  ]));