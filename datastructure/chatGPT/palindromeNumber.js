
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x){
    //check for negative numbers and ending in 0
    if(x < 0 || (x% 10 === 0 && x!==0 )){
        return false;
    }
    //initialize a variable to store the reversed integer
    var reversed = 0;
    //iterate over digits of the integer
    while( x > reversed){
        //add the last digit of the integer to reversed integer
        reversed = reversed * 10 + ( x % 10);

        //remove the last digit from integer
        x = Math.floor(x/10);
    }
    //return true if the integer is equal to the reversed integer
    //or if the integer is equal to the reversed integer divided by 10
    return x === reversed || x === Math.floor(reversed / 10) 
}

console.log(isPalindrome(121));