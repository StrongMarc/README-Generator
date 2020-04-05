const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "Enter your GitHub username: ",
    name: "username",
  },
  {
    type: "input",
    message: "What is your project title?",
    name: "project",
  },
  {
    type: "input",
    message: "What is your project description?",
    name: "description",
  },
  {
    type: "checkbox",
    message: "What is in your table of contents?",
    name: "contents",
    choices: [
      "Installation",
      "Usage",
      "Credits",
      "License"
    ]
  },
];

function writeToFile(fileName, data) {
}

function init() {
  inquirer
    .prompt(questions)
    .then(function( response ) {
      console.log(response)

  });
}

init();
