// create a function that reverse a string
// 'bitcoin' should;
// 'nioctib'

function reverse (str){
    //check input - string or something else ?
    if(!str || str.length < 2 || typeof str !=='string') {
        return 'Wrong input ⛔️'
    }
    // store in an array
    const backwards = [];
    // store total items
    const totalItems = str.length -1;
    //reverse items starting from last items
    for(let i = totalItems; i >= 0; i-- ){
        //push items seperatly to backwords array
        backwards.push(str[i]);
    }
    console.table(backwards)

    
    //join items in the array
    return backwards.join()
}

function reverse2(str){
    return str.split('').reverse().join('');
}
//more cleaner
const reverse3 = str => str.split('').reverse().join('');
// more coolest
const reverse4 = str => [...str].reverse().join('');

reverse("token")
console.log(reverse2("ether"))
console.log(reverse3("doge"))
console.log(reverse4("bitcoin"))