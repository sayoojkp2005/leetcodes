/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum=0,amt=0;
    for(const i of nums){
        if(i % 2 === 0 && i % 3 === 0){
            sum += i;
            amt++;
        }
    }
    if ( amt === 0) return 0;
    return Math.floor( sum / amt);
};