const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Main/Manager");
const Engineer = require("./Main/Engineer");
const Intern = require("./Main/Intern");
const createHtml = require("./createHtml");

const validateInput = (userInput) =>{
	if (userInput == ""){
		return "Please write your answer to the question"
	} else {
		return true;
	}
}

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
		validate: validateInput,
  },
  {
    type: "input",
    name: "id",
    message: "Enter eployee's ID",
		validate: validateInput,
  },
  {
    type: "input",
    name: "email",
    message: "Enter Manager's email",
		validate: validateInput,
  },
  {
    type: "input",
    name: "number",
    message: "Enter your office number",
		validate: validateInput,
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter Engineer's name",
		validate: validateInput,
  },
  {
    type: "input",
    name: "id",
    message: "Enter eployee's ID",
		validate: validateInput,
  },
  {
    type: "input",
    name: "email",
    message: "Enter Engineer's email",
		validate: validateInput,
  },
	{
    type: "input",
    name: "githubName",
    message: "Enter Engineer's Github name",
		validate: validateInput,
  },
];
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter Intern's name",
		validate: validateInput,
  },
  {
    type: "input",
    name: "id",
    message: "Enter eployee's ID",
		validate: validateInput,
  },
  {
    type: "input",
    name: "email",
    message: "Enter Inter's email",
		validate: validateInput,
  },
  {
    type: "input",
    name: "school",
    message: "Enter your school",
		validate: validateInput,
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

initManager()
  .then(promptMemberChoice)
  .then(() => {
    const html = createHtml(answersArray);
		//console.log(html);
		fs.writeFile('teamProfileGenerator.html', html, (err) =>{
			err
      ? console.log(err)
      : console.log("Successfully created team profile web site!")
		})
  });


