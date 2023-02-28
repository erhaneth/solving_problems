function largestOfFour(arr) {
  // Create an empty array to store the largest numbers from each sub-array
  let largestNums = [];

  // Loop through each sub-array in the provided array.
  for (let i = 0; i < arr.length; i++) {
    // Get the current sub-array
    let subArray = arr[i];
    // Initialize a variable to store the largest number in the current sub-array
    let max = subArray[0];

    // Loop through each element in the current sub-array
    for (let j = 1; j < subArray.length; j++) {
      // If the current element is larger than the current max, update the max
      if (subArray[j] > max) {
        max = subArray[j];
      }
    }

    // Add the largest number from the current sub-array to the result array
    largestNums.push(max);
  }

  // Return the result array containing the largest number from each sub-array
  return largestNums;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
