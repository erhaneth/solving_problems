// mergedSortedArrays([0,4,5,21], [6,7,30]);
// returns [0,4,5,6,7,21,30]

function mergedSortedArray(array1,array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];

    //chek input
    if(array1.length === 0){
        return array2
    }
    if(array2.length === 0){
        return array1
    }

    return mergedArray;

}

mergedSortedArray([0,4,5,21], [6,7,30]);