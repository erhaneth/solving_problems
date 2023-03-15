var smallestRangeI = function (nums, k) {
  if (nums.length == 1) {
    return 0;
  }
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  if (Math.sign(max - min - 2 * k) == -1 || max - min - 2 * k == 0) {
    return 0;
  } else {
    return max - 2 * k - min;
  }
};
