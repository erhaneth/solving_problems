function findLongestWordLength(str) {
  //initilize a variable to store the current word length
  let currentLength = 0;
  //initialize a variable to store the longest length word
  let longestLength = 0;
  //loop tru each character in the string
  for (let i = 0; i < str.length; i++) {
    // if the character is not a space, increment the current word length
    if (str[i] !== " ") {
      currentLength++;
    }
    // otherwise, if the character is a space, compare the current word length with the longest word length
    else {
      // if the current word length is greater than the longest word length, update the longest word length
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
      //reset the current word length to zero
      currentLength = 0;
    }
  }
  //after looping thru all characters, check again if the current word length is greater than the longest word length
  if (currentLength > longestLength) {
    longestLength = currentLength;
  }
  return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
