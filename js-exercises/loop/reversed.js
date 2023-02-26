function reverseString(str) {
  let reversedStr = "";
  for(let i = str.length -1; i >= 0; i--){
    console.log(reversedStr += str[i])
     
  }
  return reversedStr;
}

reverseString("hello");
