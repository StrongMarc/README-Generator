const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
// var api = require("./api.js");
var generateMarkdown = require("./generateMarkdown.js");

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
  {
    type: "checkbox",
    message: "What is in your table of contents?",
    name: "contents",
    choices: [
      "Installation",
      "Usage",
      "License"
    ]
  },
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
  
];

// const contentInstallation = [
//   {
//     type: "input",
//     message: "Describe the steps required for your project installation?",
//     name: "install",
//   }
// ];

function writeToFile(fileName, data) {

}

function init() {
  inquirer
    .prompt(questions)
    .then(function( response ) {
      // answers = {};
      // if (response.contents.includes("Installation")){
      //   inquirer
      //     .prompt(contentInstallation)
      //     .then(function( b ){
      //       tempArray = b;
      //       console.log ("yes")
      //       //https://stackoverflow.com/questions/41234381/how-to-join-two-json-array-objects-in-node/41234423
      //       answers = Object.assign(response, tempArray)
            
      //     })
        
        // console.log (tempArray)
      // }
      console.log (response)
      // api(response.username);
      generateMarkdown.markdown(response)
      console.log(generateMarkdown.markdown(response));
    });
    
}

init();
