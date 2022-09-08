const Employee = require("../lib/employee");

describe("this employee", () => {
  test("Successfully generated new object?", () => {
    const employee = new Employee("Andy", "01", "andyloo416@gmail.com");
    expect(employee.name).toBe("Andy");
    expect(employee.id).toBe("01");
    expect(employee.email).toBe("andyloo416@gmail.com");
  });

  test("Able to input name and pass through the constructor", () => {
    const name = "Andy";
    const employee = new Employee("Andy", "01", "andyloo416@gmail.com");
    expect(employee.getName()).toBe(name);
  });

  test("Able to input id and pass through the constructor", () => {
    const id = "01";
    const employee = new Employee("Andy", "01", "andyloo416@gmail.com");
    expect(employee.getId()).toBe(id);
  });

  test("Able to input email and pass through the constructor", () => {
    const email = "andyloo416@gmail.com";
    const employee = new Employee("Andy", "01", "andyloo416@gmail.com");
    expect(employee.getEmail()).toBe(email);
  });

  test("Able to generate employee's role?", () => {
    const role = "Employee";
    const employee = new Employee("Andy", "01", "andyloo416@gmail.com");
    expect(employee.getRole()).toBe(role);
  });
});
