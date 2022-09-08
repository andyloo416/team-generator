const Manager = require("../lib/manager");

describe("this manager", () => {
  test("Successfully created object?", () => {
    const manager = new Manager("Andy", "01", "andyloo416@gmail.com", "404");
    expect(manager.name).toBe("Andy");
    expect(manager.id).toBe("01");
    expect(manager.email).toBe("andyloo416@gmail.com");
    expect(manager.officeNumber).toBe("404");
  });

  test("Manager's office number created?", () => {
    const manager = new Manager("Andy", "01", "andyloo416@gmail.com", "404");
    expect(manager.getOfficeNumber()).toBe("404");
  });

  test("Manager's role created?", () => {
    const manager = new Manager("Andy", "01", "andyloo416@gmail.com", "404");
    expect(manager.getRole()).toBe("Manager");
  });
});
