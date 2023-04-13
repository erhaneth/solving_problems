
function pairElement(str) {
    // Define an object to map each nucleobase to its complementary base
    const basePairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    };

    // Initialize an empty array to store the pairs
    const result = [];

    // Iterate through each character in the input string
    for (let char of str) {
        // Get the complementary base using the object and create a pair
        const pair = [char, basePairs[char]];
        // Append the pair to the result array
        result.push(pair);
    }

    // Return the final result
    return result;
}

// Test the function
pairElement("GCG");
