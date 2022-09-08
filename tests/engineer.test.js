const Engineer = require("../lib/engineer");

describe("this engineer", () => {
  test("Successfully generated new object?", () => {
    const engineer = new Engineer(
      "Andy",
      "01",
      "andyloo416@gmail.com",
      "andyloo416"
    );
    expect(engineer.name).toBe("Andy");
    expect(engineer.id).toBe("01");
    expect(engineer.email).toBe("andyloo416@gmail.com");
    expect(engineer.github).toBe("andyloo416");
  });

  test("if github is created?", () => {
    const engineer = new Engineer(
      "Andy",
      "01",
      "andyloo416@gmail.com",
      "andyloo416"
    );
    expect(engineer.getGithub()).toBe("andyloo416");
  });

  test("if role is created?", () => {
    const engineer = new Engineer(
      "Andy",
      "01",
      "andyloo416@gmail.com",
      "andyloo416"
    );
    expect(engineer.getRole()).toBe("Engineer");
  });
});
