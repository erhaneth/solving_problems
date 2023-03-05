function isPalindrome(x) {
  // Return false if x is negative
  if (x < 0) {
    return false;
  }

  // Compute the reverse of x
  let reversed = 0;
  let original = x;
  while (x > 0) {
    let digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  // Check if the original and reversed integers are the same
  return reversed === original;
}
