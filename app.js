const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const createHTML = require("./createHTML");

const inquirer = require("inquirer");
const fs = require("fs");

const team = [];

const engineerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the engineer?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID of the engineer?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the engineer?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the GitHub of the engineer?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      team.push(engineer);
      //   console.log(team);
      chooseNext();
    });
};

const chooseNext = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Choose the next step.",
        choices: ["new Engineer", "new Manager", "new Intern", "finished"],
      },
    ])
    .then((response) => {
      if (response.role == "new Engineer") {
        engineerPrompt();
      } else if (response.role == "new Manager") {
        managerPrompt();
      } else if (response.role == "new Intern") {
        internPrompt();
      } else {
        fs.writeFileSync("./createHTML.html");
      }
    });
};

const managerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the manager?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID of the manager?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the manager?",
      },
      {
        type: "input",
        name: "officeNo",
        message: "What is the office number of the manager?",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNo
      );
      team.push(manager);
      console.log(team);
      chooseNext();
    });
};

const internPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the intern?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID of the intern?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the intern?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the university of the intern?",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      team.push(intern);
      console.log(team);
      chooseNext();
    });
};

engineerPrompt();
