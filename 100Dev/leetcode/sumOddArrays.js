function sumOddLengthSubarrays(arr) {
  const length = arr.length;
  let sum = 0;

  // Loop through each element in the array
  for (let i = 0; i < length; i++) {
    // Calculate the total number of subarrays that include the current element
    const count = (i + 1) * (length - i);

    // Calculate the number of odd-length subarrays that include the current element
    const oddCount = Math.ceil(count / 2);

    // Add the sum of the odd-length subarrays for the current element
    sum += oddCount * arr[i];
  }

  // Return the final sum of all odd-length subarrays
  return sum;
}
