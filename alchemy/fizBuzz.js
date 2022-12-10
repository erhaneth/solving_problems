function fizzBuzz(numbers) {
    let str = "";
  
    for (let i = 0; i < numbers.length; i++) {
      // 'number' variable is declared and initialized with the value of 
      // the current element in the 'numbers' array
      const number = numbers[i];
      if (number % 3 === 0 && number % 5 === 0) {
        str += "fizzbuzz";
      } else if (number % 3 === 0) {
        str += "fizz";
      } else if (number % 5 === 0) {
        str += "buzz";
      }
    }
  
    return str;
  }
  