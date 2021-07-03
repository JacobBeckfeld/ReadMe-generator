const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the name of your project?",
    name: "title"
},
{
    type: "input",
    message: "What is your name?",
    name: "name"
},
{
    type: "input",
    message: "Write a description of your project",
    name: "description"
},
{
    type: "input",
    message: "What are your insalation instructions?",
    name: "instalation"
},
{
    type: "input",
    message: "What is this application used for?",
    name: "usage"
},
{
    type: "rawlist",
    message: "What applications are you going to use?",
    name: "license",
    choices: ["Apache", "Boost", "BSD", "Eclipse"]
},
{
    type: "input",
    message: "Please provide a link to your Github.",
    name: "github"
},
{
    type: "input",
    message: "Please provide your email.",
    name: "email"

},
{  
    type: "input",
    message: "Who are your contributers",
    name: "contributers"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err ) =>{
        if(err){console.log(err)}
        else{console.log("File made!")}
    }
    )
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
        .then((data) => {
            writeToFile("readme.md", generateMarkdown(data))
        })
}

// Function call to initialize app
init();
