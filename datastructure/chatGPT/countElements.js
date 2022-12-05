// Write a function countElements that takes in an array and 
// returns an object a count of each element in the array.

function countElements(arr) {
    const counts = {}
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (counts[element] === undefined) {
            counts[element] = 1
        } else {
            counts[element] += 1
        }
    }
    return counts
}


//white board solution:
// Declare an empty object counts to keep track of the counts of each element.

// Iterate over the elements of the array with a for-of loop. For each element, do the following:

// If the element does not exist in counts, add it to counts with a count of 1.

// Otherwise, if the element exists in counts, increment its count by 1.

// After the iteration, return the counts object.

// Here is an example of the algorithm in action with the array ["e", "k", "e", "z", "i", "z"]:

// counts is initialized as an empty object {}.

// The first element is "e". It does not exist in counts, so it is added with a count of 1, resulting in {e: 1}.

// The second element is "k". It does not exist in counts, so it is added with a count of 1, resulting in {e: 1, k: 1}.

// The third element is "e". It exists in counts, so its count is incremented by 1, resulting in {e: 2, k: 1}.

// The fourth element is "z". It does not exist in counts, so it is added with a count of 1, resulting in {e: 2, k: 1, z: 1}.

// The fifth element is "i". It does not exist in counts, so it is added with a count of 1, resulting in {e: 2, k: 1, z: 1, i: 1}.

// The sixth element is "z". It exists in counts, so its count is incremented by 1, resulting in {e: 2, k: 1, z: 2, i: 1}.

// The iteration is complete and the function returns {e: 2, k: 1, z: 2, i: 1}.