// In JavaScript, "binding" refers to the process of setting the
// value of a variable to an object or function. 
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculatePaycheck() {
    return this.salary / 12;
  }
}

const john = new Employee("John", 60000);
const jane = new Employee("Jane", 75000);