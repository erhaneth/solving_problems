// Define a "Person" class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Create a new Person object
  const john = new Person('John', 35);
  
  // Bind the "greet" method to the "john" object
  const johnGreet = john.greet.bind(john);
  
  // Use the bound "johnGreet" method
  johnGreet();  // "Hi, my name is John and I am 35 years old."
  