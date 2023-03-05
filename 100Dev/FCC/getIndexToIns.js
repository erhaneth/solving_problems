function getIndexToIns(arr, num) {
  //sort the input array in ascending order
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

console.log(getIndexToIns([40, 60], 20));
