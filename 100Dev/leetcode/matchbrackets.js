var isValid = function (str) {
  const stack = [];
  const map = { "(": ")", "{": "}", "[": "]" };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (map[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (map[last] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
