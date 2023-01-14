const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require('../Main/Manager');
const Engineer = require('../Main/Engineer');
const Intern = require('../Main/Intern');
const createHtml = require('./createHtml');

const questions = [ 
	{
		type: 'input',
		name: 'name',
		message: "Enter Manager's name",
	},
	{
		type: 'input',
		name: 'id',
		message: "Enter eployee's ID",
	},
	{
		type: 'input',
		name: 'email',
		message: "Enter Manager's email",
	},
	{
		type: 'input',
		name: 'number',
		message: "Enter your office number",
	},
	{
		type: 'list',
		name: 'license',
		message: 'Select the employee time you want to add',
		choices: ['manager', 'engineer', 'intern']
	},
	{
		type: 'input',
		name: 'name',
		message: "Enter Engineer's name",
	},
	{
		type: 'input',
		name: 'id',
		message: "Enter eployee's ID",
	},
	{
		type: 'input',
		name: 'email',
		message: "Enter Engineer's email",
	},
	{
		type: 'input',
		name: 'name',
		message: "Enter Intern's name",
	},
	{
		type: 'input',
		name: 'id',
		message: "Enter eployee's ID",
	},
	{
		type: 'input',
		name: 'email',
		message: "Enter Inter's email",
	},
	{
		type: 'input',
		name: 'school',
		message: "Enter your school",
	}
];

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created team profile web site!')
    );
}

function init() {
	inquirer
  .prompt(questions)
  .then((answers) => {
    const teamprofilePageContent = createHtml(answers);
		writeToFile('readme.md', teamprofilePageContent);
  });
}

init();