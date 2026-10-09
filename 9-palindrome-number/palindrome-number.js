/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    while(x<0){
        return false;
    }
    let res=x.toString().split('').reverse().join('');
    

    if(x==res){
       
        return true;
        
    }
    else{ return false;}
};

console.log(isPalindrome("121"));