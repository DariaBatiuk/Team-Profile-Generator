const Employee = require('../Main/Employee');

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);

		this.school = school;
  }

	getschool(){
		return this.getschool
	}
	getJob (){
		return "Intern"
	}
}
module.exports = Intern;