/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
   let r= new Array(2);
    r[0]=celsius + 273.15;
    r[1]=celsius * 1.80 + 32.00;
    return(r);
};