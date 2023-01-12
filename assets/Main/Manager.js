const Employee = require('../Main/Employee');

class Manager extends Employee {
	constructor(name, id, email, number) {
		super(name, id, email);

		this.nunber = number;
  }

	getNumber(){
		return this.number
	}
	getJob (){
		return "Manager"
	}
}
module.exports = Manager;