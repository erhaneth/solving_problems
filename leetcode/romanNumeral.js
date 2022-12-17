function romanToInt(s){
    //create a dictionary that maps Roman numerals to integer
    const romanToIntMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    // Iterate through the string from left to right
    for(let i = 0;i < s.length; i++){
        //get the integer value of the Roman numeral
        const value = romanToIntMap[s[i]];
        //if the next Roman numeral has a larger value, subtract the current value insted of adding it
        if(i < s.length - 1 && romanToIntMap[s[i+1]]> value){
            result -= value;

        }else {
            result += value;
        }
    }
    return result;
}

console.log(romanToInt("II")); 
console.log(romanToInt("XII")); 