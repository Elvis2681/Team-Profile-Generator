// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const FilePath = "./dist/Generated.html";

function generateHTMLfile() {
  const html1 = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile Generator</title>
      </head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <body>
        <div class = "jumbotron bg-danger">
            <h1 class = "text-center text-light">
                My Team
            </h1>
        </div>
        <div class="col-12 p-1 customBG ">
            <div class="row p-1 m-1 align-items-center justify-content-center customBG2 ">`;
  fs.writeFileSync(filePath, html1);
  addManager();
}

generateHTMLfile();

function addManager() {
  inquirer
    .prompt([
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
    .then((answer) => {
      const Manager = new Manager(
        answer.ManagerName,
        answer.Id,
        answer.Email,
        answer.School
      );
      fs.appendFileSync(FilePath, cardData(Manager)), rerun();
    });
}

function addEngineer() {
  inquirer
    .prompt([
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
    .then((answer) => {
      const Engineer = new Engineer(
        answer.EngineerName,
        answer.Id,
        answer.Email,
        answer.School
      );
      fs.appendFileSync(FilePath, cardData(Engineer)), rerun();
    });
}

function addIntern() {
  inquirer
    .prompt([
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
    .then((answer) => {
      const Intern = new Intern(
        answer.InternName,
        answer.Id,
        answer.Email,
        answer.School
      );
      fs.appendFileSync(FilePath, cardData(Intern)), rerun();
    });
}

function rerun() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which team member would you like to add?",
        name: "NextUp",
        choices: ["Engineer", "Intern", "Done adding?"],
      },
    ])
    .then((answers) => {
      const html2 = `</div>
</div>
</body>
</html>`;
      if (answers.Nextup === "Done adding?") {
        fs.appendFileSync(filePath, html2);
        console.log(
          "HTML file succesfully generated, can be find in 'dist' directory filenamed as myTeam.html"
        );
      } else if (answers.Nextup === "Engineer") {
        addEngineer();
      } else if (answers.Nextup === "Intern") {
        addIntern();
      }
    });
}
