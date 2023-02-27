var mySqrt = function (x) {
  // non-negative start from zero
  // if x 0, result zero
  if (x === 1) return 1;
  let result = 0;
  //iterate check if the square of current number is less than or equal to x
  for (let i = 0; i <= x / 2; i++) {
    if (x === 0) return 0;
    if (i * i <= x) {
      result = i;
    } else {
      break;
    }
  }
  //set number to current number otherwise- not matter what
  return result;
};
console.log(mySqrt(0));
