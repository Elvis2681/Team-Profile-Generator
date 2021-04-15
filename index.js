// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const FilePath = ("./dist/Generated.html")

function addManager() {
inquirer
    .prompt ([
        {
            type: "input",
            message: "What is the Team Manager's name?",
            name: "ManagerName",
        },
        {
            type: "input",
            message: "What is his ID?",
            name: "ID",
        },
        {
            type: "input",
            message: "What is your Email ",
            name: "Email",
        },
        {
            type: "input",
            message: "What is the Office Number?",
            name: "OfficeNumber",
        },
    ])
}

function addEngineer() {
    inquirer
        .prompt ([
            {
                type: "input",
                message: "What is the Team Engineer's name?",
                name: "EngineerName",
            },
            {
                type: "input",
                message: "What is the ID?",
                name: "ID",
            },
            {
                type: "input",
                message: "What is your Email?",
                name: "Email",
            },
            {
                type: "input",
                message: "What is your GitHub?",
                name: "GitHub",
            },
        ])
}

function addIntern() {
        inquirer
            .prompt ([
                {
                    type: "input",
                    message: "What is the Team Engineer's name?",
                    name: "InternName",
                },
                {
                    type: "input",
                    message: "What is your ID?",
                    name: "Id",
                },
                {
                    type: "input",
                    message: "What is your Email?",
                    name: "Email",
                },
                {
                    type: "input",
                    message: "What school are you attending?",
                    name: "School",
                },
            ])
            .then ((answer) => {
                const Intern = new Intern(answer.InternName, answer.Id, answer.Email, answer.School)
                fs.appendFileSync(FilePath)
        })
    }


function rerun (){
    inquirer
            .prompt ([
                {
                    type: "list",
                    message: "Which team member would you like to add?",
                    name: "NextUp", 
                    choices:["Engineer", "Intern", "Done adding?",]
                },
            ])
    .then ((answer) => {
if (answers.Nextup === "Done adding?"){
    fs.appendFileSync("")
}

})
}

