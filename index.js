// add npm package fs, axious and inquirer
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

// add developer modules
var api = require("./api.js");
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

// Given:  write to README.md
function writeToFile(fileName, data) {
  // code for writing readme file
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      throw err;
    }
    console.log(`Success!`);
  });
}

function init() {

  // prompt for questions
  inquirer
    .prompt(questions)
    .then(function( response ) {
     
      // moduralization of api & axios
      // api call like 9-activiy 9 combined with 9activity 33
        api.getUser(response.username).then(function(userdata) {
          // define avatar and email from queryUrl
          const avatar = userdata.data.avatar_url
          const email = userdata.data.email
      
          // add avatar & email to response object
          //https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_properties3
          response.avatar = avatar;
          response.email = email;
        
          // set md to to generateMarkdown return string
          md = generateMarkdown.markdown(response)
          
          // Generate README.md file in assets folder, call writeToFile function with arguments filename & the markdown string
          let filename = "./assets/README.md"
          writeToFile(filename, md)
        });
          
    });

}

init();
