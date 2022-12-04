// Write a function reverse that takes a string as an argument and returns a string with all the letters reversed.

// For example, reverse("bitcoin") would return the string "nioctib"

function reverse(string) {
    // Create an empty string to store the reversed string
    let reversedString = "";
  
    // Iterate through the input string in reverse order
    for (let i = string.length - 1; i >= 0; i--) {
      // Append the current character to the reversed string
      reversedString += string[i];
    }
  
    // Return the reversed string
    return reversedString;
  }

let string = "cat";
let reversedString = reverse(string);

console.log(reversedString);  // Output: "tac"
