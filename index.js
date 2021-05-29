// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const filePath = "./dist/Generated.html";

function cardData(data) {
  if (data.getRole() === "Manager") {
    const managerCard = `
      <div class="card d-flex flex-wrap m-1 align-items-center justify-content-center">
        <header>
          <h3>${data.getManagerName()}</h3>
          <p>${data.getRole()}</p>
        </header>
        <content class="card-content">
          <p>ID:1</p>
          <p>
            Email:<a href="mailto:${data.getEmail()}">${data.getEmail()}</a>
          </p>
          <p>Office Number:${data.getOfficeNumber()}</p>
        </content>
      </div>`;
    return managerCard;
  } else if (data.getRole() === "Engineer") {
    var engineerCard = `
    <div class="card d-flex flex-wrap m-1 align-items-center justify-content-center">
      <header>
        <h3>${data.getEngineerName()}</h3>
        <p>${data.getRole()}</p>
      </header>
      <content class="card-content">
        <p>ID:1</p>
        <p>
          Email:<a href="mailto:${data.getEmail()}">${data.getEmail()}</a>
        </p>
      <p>Github:<a href="https://github.com/${data.getGithub()}">${data.getGithub()}</a></p>
      </content>
    </div>
  );`;
    return engineerCard;
  } else if (data.getRole() === "Intern") {
    var internCard = `
    <div class="card d-flex flex-wrap m-1 align-items-center justify-content-center">
    <header>
      <h3>${data.getInternName()}</h3>
      <p>${data.getRole()}</p>
    </header>
    <content class="card-content">
      <p>ID:1</p>
      <p>
        Email:<a href="mailto:${data.getEmail()}">${data.getEmail()}</a>
      </p>
      <p>School:${data.getSchool()}</p>
    </content>
  </div>`;
    return internCard;
  }
}
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
      const manager = new Manager(
        answer.ManagerName,
        answer.Id,
        answer.Email,
        answer.School
      );
      fs.appendFileSync(filePath, cardData(manager)), rerun();
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
      const engineer = new Engineer(
        answer.EngineerName,
        answer.Id,
        answer.Email,
        answer.School
      );
      fs.appendFileSync(filePath, cardData(engineer)), rerun();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
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
      const intern = new Intern(
        answer.InternName,
        answer.Id,
        answer.Email,
        answer.School
      );
      fs.appendFileSync(filePath, cardData(intern)), rerun();
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
      if (answers.NextUp === "Done adding?") {
        fs.appendFileSync(filePath, html2);
        console.log(
          "HTML file succesfully generated, can be find in 'dist' directory filenamed as output.html"
        );
      } else if (answers.NextUp === "Engineer") {
        addEngineer();
      } else if (answers.NextUp === "Intern") {
        addIntern();
      }
    });
}

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
