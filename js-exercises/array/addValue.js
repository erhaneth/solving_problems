//add 1 to each element of array with addOne function

// const array = [3,4,5]
// function addOne(array) {
//     for(let i = 0; i < array.length; i++){
//         array[i]++;
//     }
// }
// addOne(array)
// console.table(array)

//remove element with splice 
function removeOccurrences(array, num) {
    for (let i = array.length - 1; i >= 0; i--){
        if(array[i]=== num){
            array.splice(i,1)
        }
    }
}
const array = [1, 2, 3, 1];
removeOccurrences(array, 1);
console.log( array ); // [2, 3]


