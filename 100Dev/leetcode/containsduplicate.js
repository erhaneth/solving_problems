var containsDuplicate = function (nums) {
  //use map object as hash table
  let dict = {};
  //loop tru nums
  for (let i = 0; i < nums.length; i++) {
    //if numbers found in hash table
    if (dict.hasOwnProperty(nums[i])) {
      //if found true
      return true;
    } else {
      //if not add to hash table
      dict[nums[i]] = true;
    }
  }
  //return false if its distinct
  return false;
};
