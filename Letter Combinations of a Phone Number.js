let digiToLetters = [[],[],['a','b','c'],['d','e','f' ],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
let tempStr = '';
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits || digits == ''){
        return [];
    }
    let digiArray = [];
    let result = [];
    console.log(digiToLetters);
    for(let i=0;i<digits.length;i++){
        let digit = parseInt(digits.charAt(i));
        digiArray.push(digit);
    }
    console.log(digiArray);
    tempStr = '';
    xxx(digiArray, 0, result);
    console.log(result);
    return result;
};

function xxx(digiArray, deepth, result){
    if(deepth == digiArray.length){
        result.push(tempStr);
        return;
    }
    let letters = digiToLetters[digiArray[deepth]];
    // console.log(letters);
    for(let letter of letters){
        tempStr = tempStr + letter;
        xxx(digiArray, deepth+1, result);
        // Too slow here-----------------------
        tempStr = tempStr.substring(0,deepth);
    }
}

letterCombinations('23');