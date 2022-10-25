// What Can Cause Time in a Function? Operations (+, -, *, /)
// Comparisons (<, >, ==)
// Looping (for, while)
// Outside Function call (function())

//Log all pairs of array
//nested loops 


// const boxes = ['a', 'b', 'c', 'd', 'e'];
// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j])
//     }
//   }
// }

// logAllPairsOfArray(boxes)


function miniMaxSum(arr) {
    // Write your code here
    
    //  find the min value
    // # find the min value
    let max = -Infinity
    let min = Infinity
    let arrSum = 0;
    for (let i=0; i<arr.length; i++){
        arrSum+= arr[i] 
        if (arr[i] < min){
            min = arr[i]
        } 
        if (arr[i] > max){
            max = arr[i]
        }
    }
    //  then sum the rest of 4

    let maxSum = arrSum - min
    // # then sum the rest of 4
    let minSum = arrSum - max
    // # print maxSum and minSum
    console.log(minSum,maxSum)

}

miniMaxSum(arr)