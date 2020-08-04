let overLength = false;
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    return go(0, nums);
};

function go(currP, nums){
    if(currP < nums.length){
        if(nums.length == 1){
            return true;
        }
        if(nums[currP] == 0){
            return false;
        }
        for(let i=1;i<=nums[currP];i++){
            currP += i;
            if(currP == nums.length-1){
                return true;
            }
            let temp = go(currP, nums, false);
            if(temp){
                return true;
            }
            currP -= i;
            if(overLength){
                overLength = false;
                return false;
            }
        }
        return false;
    }
    overLength = true;
    return false;
}

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.log(canJump([2,0,0]));