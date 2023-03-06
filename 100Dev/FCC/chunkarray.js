function chunkArrayInGroups(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
// This implementation uses a for loop to iterate over the elements of arr in increments of size. In each iteration, it extracts a subarray of length size using the slice method and pushes it to a new array result. Finally, it returns the result array containing the subarrays.
