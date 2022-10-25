// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false
const array1 = ["a", 1, "c", null];
const array2 = ["z", "y", 3];

//create a function named commonItem
function commonItem(array1, array2) {
  // for loop
  for (let i = 0; i < array1.length; i++) {  //O(n)
    //2nd for loop
    for (let j = 0; j < array2.length; j++) // O(n)
      if (array1[i] === array2[j]) {
        return true;
      }
  }

  return false;
}
//invoke it, to see what would return
console.log("Here the result", commonItem(array1, array2))

//Big O(n*n) not very efficient 

// More efficient way
const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', '4'];

function containCommonItem(arr1, arr2) {
    //loop tru first array and create object where properties === items in the array
    let match = {};
    for (let i = 0; i < arr1.length; i++){
        if(!match[arr1[i]]){
            const item = arr1[i]
            match[item] = true;
        }

    }
    // loop tru second array and check if item in second array exists on created object
    for ( let j = 0; j < arr2.length; j++) {
        if(match[arr2[j]]){
            return true;
        }
    }
    return false;

}
// O(a+b) Time complexity 
// O(a) Space complexity 
console.log("Efficient way", containCommonItem(arr1,arr2))

//JS method lol
function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
  }

  console.log("Sneaky way", containsCommonItem3(array1, array2))
