const inquirer = require("inquirer");

// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
// const questions = [];
inquirer
.prompt([
    {
        type: "input",
        message: "What is the name of your project?",
        name: "project"
    },
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {

    }
])

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
