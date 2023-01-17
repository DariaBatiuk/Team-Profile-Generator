const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Main/Manager");
const Engineer = require("./Main/Engineer");
const Intern = require("./Main/Intern");
const createHtml = require("./createHtml");

const choiceQuestion = [
  {
    type: "list",
    name: "choice",
    message: "Do you want to add engineer or intern?",
    choices: ["engineer", "intern", "exit"],
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter Manager's name",
  },
  {
    type: "input",
    name: "id",
    message: "Enter eployee's ID",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Manager's email",
  },
  {
    type: "input",
    name: "number",
    message: "Enter your office number",
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter Engineer's name",
  },
  {
    type: "input",
    name: "id",
    message: "Enter eployee's ID",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Engineer's email",
  },
	{
    type: "input",
    name: "githubName",
    message: "Enter Engineer's Github name",
  },
];
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter Intern's name",
  },
  {
    type: "input",
    name: "id",
    message: "Enter eployee's ID",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Inter's email",
  },
  {
    type: "input",
    name: "school",
    message: "Enter your school",
  },
];
const answersArray =[];

function initManager() {
  return inquirer.prompt(managerQuestions).then((answers) => {
		const manager = new Manager(answers.name, answers.id, answers.email, answers.number)
    answersArray.push(manager)
  });
}
function initEngineer() {
  return inquirer.prompt(engineerQuestions).then((answers) => {
		const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubName)
    answersArray.push(engineer)
  });
}
function initIntern() {
  return inquirer.prompt(internQuestions).then((answers) => {
		const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    answersArray.push(intern)
  });
}
function promptMemberChoice() {
  return inquirer.prompt(choiceQuestion).then((answers) => {
    if (answers.choice == "engineer") {
      return initEngineer().then(promptMemberChoice);
    } else if (answers.choice == "intern") {
      return initIntern().then(promptMemberChoice);
    }
  });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("Successfully created team profile web site!")
  );
}

initManager()
  .then(promptMemberChoice)
  .then(() => {
    const html = createHtml(answersArray);
		console.log(html);
		fs.writeFile('teamProfileGenerator', html, (err) =>{
			err
      ? console.log(err)
      : console.log("Successfully created team profile web site!")
		})
  });




