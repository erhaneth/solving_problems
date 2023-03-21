function wordCountEngine(document) {
  // initialize word count variable
  let wordCount = {};

  // loop through document
  for (let i = 0; i < document.length; i++) {
    // remove punctuation and convert to lowercase
    const word = document[i].replace(/[^\w\s]/gi, " ").toLowerCase();

    // check if the resulting word is an empty string, and if so, skip to the next iteration
    if (word.length === 0) {
      continue;
    }

    // if the word is not already in the wordCount object, add it with a count of 1. Otherwise, increment the count for that word.
    if (word in wordCount) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  // convert the wordCount object to an array of objects with "word" and "count" properties
  let wordCountArray = Object.keys(wordCount).map(function (key) {
    return {
      word: key,
      count: wordCount[key],
    };
  });

  // sort the array of word count objects in descending order based on the "count" property
  wordCountArray.sort(function (a, b) {
    return b.count - a.count;
  });

  // return sorted array of word count objects
  return wordCountArray;
}

// Test cases
const document1 = [
  "Practice",
  "makes",
  "perfect.",
  "you'll",
  "only",
  "get",
  "Perfect",
  "by",
  "practice.",
  "just",
  "practice!",
];
const expectedOutput1 = [
  { word: "practice", count: 3 },
  { word: "perfect", count: 2 },
  { word: "makes", count: 1 },
  { word: "youll", count: 1 },
  { word: "only", count: 1 },
  { word: "get", count: 1 },
  { word: "by", count: 1 },
  { word: "just", count: 1 },
];

const document2 = ["Hello", "world!", "Hello", "again!"];
const expectedOutput2 = [
  { word: "hello", count: 2 },
  { word: "world", count: 1 },
  { word: "again", count: 1 },
];

const document3 = [];
const expectedOutput3 = [];

console.log(wordCountEngine(document1)); // should output expectedOutput1
console.log(wordCountEngine(document2)); // should output expectedOutput2
console.log(wordCountEngine(document3)); // should output expectedOutput3
