// https://university.alchemy.com/course/js/md/destructuring-spread-rest


//Either Not Both
function eitherNotBoth(num) {
    if((num % 3 === 0 || num % 5 === 0) && (num % 15 !== 0)){
        return true
    } else {
        return false
    }
 }
 
 module.exports = eitherNotBoth;