const inquirer = require("inquirer");

const questions = [
  {
    message: "Enter your GitHub username: ",
    name: "username",
  },
  {
    message: "What is your project name?",
    name: "project",
  },
];

function writeToFile(fileName, data) {
}

function init() {
  inquirer
    .prompt(questions)
    .then(function( response ) {
      console.log(response)
      console.log(response.username)
      console.log(response.project)
  });
}

init();
