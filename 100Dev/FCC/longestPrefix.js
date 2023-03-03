function longestCommonPrefix(strs) {
  // Check if input array is empty, return empty string if so
  if (strs.length === 0) {
    return "";
  }

  // Initialize prefix to first string in array
  let prefix = strs[0];

  // Loop through remaining strings in array
  for (let i = 1; i < strs.length; i++) {
    // Remove characters from prefix until it is a prefix of current string
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);

      // If prefix becomes empty, there is no common prefix, return empty string
      if (prefix === "") {
        return "";
      }
    }
  }

  // Return prefix, which should contain the longest common prefix among input strings
  return prefix;
}
