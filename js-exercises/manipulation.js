// String Length
// An important property built-in to strings is length. We can easily look up how many characters are stored in a string by accessing this property:

// console.log( "a".length ); // 1
// console.log( "Hello".length ); // 5
// ☝️ Since the character indexing is 0 based, the length value will actually be 1 greater than the last character index.

// 👀 This is an important thing to notice for this current task!

// 🏁 Your Goal: Complete Ends With X
// Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. Return true if it is, false if not.

// 💪 This is a tough one, but you can do it! If you get stuck remember you can use console.log to log any variables to the output.

// TODO
function endsWithX(string) {
    if(string[string.length-1].toLowerCase() === "x"){
        return true
    } else {
        return false
    }
}

module.exports = endsWithX;