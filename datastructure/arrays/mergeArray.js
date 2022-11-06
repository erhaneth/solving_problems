// mergedSortedArrays([0,4,5,21], [6,7,30]);
// returns [0,4,5,6,7,21,30]

function mergedSortedArray(array1, array2) {
  //store items into this array
  const mergedArray = [];
  //state variables
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //chek input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  //compare the with while loop that tell us which one is bigger
  while (array1Item || array2Item) {
    console.log(array1Item,array2Item)
    if (undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.table(mergedSortedArray([-1,0, 4, 5, 21], [6, 7, 30]));
