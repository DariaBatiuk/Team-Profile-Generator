const Employee = require('../Main/Employee');

class Engineer extends Employee {
	constructor(name, id, email, githubName) {
		super(name, id, email);

		this.githubName = githubName;
  }

	getGithubName(){
		return this.githubName
	}
	getJob (){
		return "Engineer"
	}
}
module.exports = Engineer;