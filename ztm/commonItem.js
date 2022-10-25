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
  for (let i = 0; i < array1.length; i++) {
    //2nd for loop
    for (let j = 0; j < array2.length; j++)
      if (array1[i] === array2[j]) {
        return true;
      }
  }

  return false;
}
//invoke it, to see what would return
console.log("Here the result", commonItem(array1, array2))