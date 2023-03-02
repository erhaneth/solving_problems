function confirmEnding(str, target) {
  // get the length of the target string
  let targetLength = target.length;
  // get the last part of the str that has the same length as target
  let strEnd = str.substring(str.length - targetLength);
  // compare strEnd with target and return true or false
  return strEnd === target;
}
confirmEnding("Bastian", "n");
