const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
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
  fs.writeFile(fileName, JSON.stringify(data, null, `\t`), function(err) {
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
     
      // moduralization of api & axios
        api.getUser(response.username).then(function(res) {
          const avatar = res.data.avatar_url
          const email = res.data.email
          // const avatarStr = avatar.join()
          console.log(avatar)
          console.log(email)

          response.avatar = avatar;
          response.email = email;
        //  response = {
        //    username: "StrongMarc",
        //    title: "Title"
        //  }

        //  response.userAvatar = avatar;
        //  response.userEmail = email;

        //  response = {
        //    username: "StrongMarc",
        //    title: "Title",
        //    userAvatar: avatar,
        //    userEmail: email
        //  }
        console.log(response)


          md = generateMarkdown.markdown(response)
          console.log(generateMarkdown.markdown(response));
          
          // Generate README.md
          let filename = "README.md"
          writeToFile(filename, md)
        });
      
        // api.getUser(response.username)
        // console.log ("test", api.getUser(response.username))

        
    
    });

}

init();
