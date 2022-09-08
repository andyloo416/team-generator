const Intern = require("../lib/intern");

describe("this intern", () => {
  test("Successfully generate object?", () => {
    const intern = new Intern("Andy", "01", "andyloo416@gmail.com", "HKU");
    expect(intern.name).toBe("Andy");
    expect(intern.id).toBe("01");
    expect(intern.email).toBe("andyloo416@gmail.com");
    expect(intern.school).toBe("HKU");
  });

  test("Intern's school created?", () => {
    const intern = new Intern("Andy", "01", "andyloo416@gmail.com", "HKU");
    expect(intern.getSchool()).toBe("HKU");
  });

  test("Intern's role created?", () => {
    const intern = new Intern("Andy", "01", "andyloo416@gmail.com", "HKU");
    expect(intern.getRole()).toBe("Intern");
  });
});
