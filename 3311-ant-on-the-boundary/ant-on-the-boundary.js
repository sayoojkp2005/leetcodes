/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let position=0;
    let count=0;

    for(const x of nums){
        position+=x;
        if(position===0){
            count++;
        }
    }
    return count;
};

