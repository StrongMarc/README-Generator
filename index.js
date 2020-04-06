const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
// var api = require("./api.js");
var generateMarkdown = require("./generateMarkdown.js");

// questions to prompt
const questions = [
  {
    type: "input",
    message: "Enter your GitHub username: ",
    name: "username",
  },
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your project description?",
    name: "description",
  },
  // {
  //   type: "checkbox",
  //   message: "What is in your table of contents?",
  //   name: "contents",
  //   choices: [
  //     "Installation",
  //     "Usage",
  //     "License"
  //   ]
  // },
  {
    type: "input",
    message: "Describe the steps required for your project installation?",
    name: "install",
  },
  {
    type: "input",
    message: "Indicate instructions and examples for use: ",
    name: "usage",
  },
  {
    type: "input",
    message: "Input license requirements: ",
    name: "license",
  },
  {
    type: "input",
    message: "Input contributing requirements: ",
    name: "contributing",
  },
  {
    type: "input",
    message: "Input command to run tests: ",
    name: "tests",
  },
  
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(`Success!`);
  });
}

function init() {

  // prompt for questions
  inquirer
    .prompt(questions)
    .then(function( response ) {
      
      console.log (response)
      // api(response.username);
      generateMarkdown.markdown(response)
      console.log(generateMarkdown.markdown(response));

      // https://api.github.com/users/StrongMarc
      let queryUrl = "https://api.github.com/users/" + response.username;
      let filename = "README.md"
      console.log(queryUrl)

      writeToFile(filename, response)
    });
    
  

}

init();
