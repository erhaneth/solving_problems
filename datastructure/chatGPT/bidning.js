class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    calculatePaycheck() {
      return this.salary / 12;
    }
  }
  
  const john = new Employee('John', 60000);
  const jane = new Employee('Jane', 75000);
  

  function calculateTotalPayroll(employees) {
    let totalPayroll = 0;
    for (const employee of employees) {
      totalPayroll += employee.calculatePaycheck.bind(employee)();
    }
    return totalPayroll;
  }
  
  const employees = [john, jane];
  const totalPayroll = calculateTotalPayroll(employees);
  