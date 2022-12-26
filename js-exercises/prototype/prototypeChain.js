

// Define a constructor function for creating Person objects
function Person(name) {
    // Assign the given name to the `name` property of the object being constructed
    this.name = name;
  }
  
  // Add a `sayHello` method to the prototype of the Person constructor function
  Person.prototype.sayHello = function() {
    // Log a greeting to the console using the `name` property of the object on which the method was called
    console.log('Hello, my name is ' + this.name + '!');
  };
  
  // Create two new Person objects using the Person constructor function
  const person1 = new Person('Tony');
  const person2 = new Person('Ezekiel');
  
  // Call the `sayHello` method on the first Person object
  console.log(person1.sayHello());; // Hello, my name is Tony!
  
  // Call the `sayHello` method on the second Person object
  console.log(person2.sayHello());; // Hello, my name is Ezekiel!
  