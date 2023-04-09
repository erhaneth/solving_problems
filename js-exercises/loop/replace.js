function myReplace(str, before, after) {
  // Step 1: Split the sentence into words
  let words = str.split(' ');

  // Step 2: Loop through each word in the sentence
  for (let i = 0; i < words.length; i++) {
    // Step 3: Check if the current word is the one we want to replace (before)
    if (words[i].toLowerCase() === before.toLowerCase()) {
      // Step 4: Preserve the case of the first character in the original word
      if (words[i][0] === words[i][0].toUpperCase()) {
        // If original word starts with uppercase, make "after" start with uppercase
        after = after[0].toUpperCase() + after.slice(1);
      } else {
        // If original word starts with lowercase, make "after" start with lowercase
        after = after[0].toLowerCase() + after.slice(1);
      }

      // Step 5: Replace the word with the new word (after)
      words[i] = after;
      // Step 6: Stop the loop, since we replaced the word
      break;
    }
  }

  // Step 7: Join the words back into a sentence
  return words.join(' ');
}

console.log(myReplace("I think we should look up there", "up", "Down"));
