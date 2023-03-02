function repeatStringNumTimes(str, num) {
  //base case
  if (num < 1) {
    return "";
  } else {
    // recursive case
    return str + repeatStringNumTimes(str, num - 1);
  }
}

console.log(repeatStringNumTimes("erhan", 3));
