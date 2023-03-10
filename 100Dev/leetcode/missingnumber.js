/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // initialize variable for totalNums
  let totalNums = 0;
  //iterate tru each number in the nums array
  for (let i = 0; i < nums.length; i++) {
    totalNums += nums[i];
  }
  // find n to be length of the input
  const n = nums.length;
  // calculate total sum of number from 0 to n
  const totalSum = (n * (n + 1)) / 2;
  //calculate missing number
  const missingNumber = totalSum - totalNums;
  // return missing number
  return missingNumber;
};
