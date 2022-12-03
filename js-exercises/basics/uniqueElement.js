// Write a function that will take an array of numbers and 
// return a new array that only contains unique numbers.

function unique(array) {
    const newArray = []
    for(let i = 0; i < array.length; i++){
        const element = array[i]
        //if its not in the array
        if(newArray.indexOf(element) === -1){
            newArray.push(element)
        }
    }
    return newArray
    
}
