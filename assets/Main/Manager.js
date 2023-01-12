const Employee = require('../Main/Employee');

class Manager extends Employee {
	constructor(name, id, email, number) {
		super(name, id, email, number);

    this.name = name;
		this.id = id;
		this.email = email;
		this.nunber = number;
  }

	getName(){
		return this.name
	}
	getId (){
		return this.id
	}
	getEmail(){
		return this.getEmail
	}
	getNumber(){
		return this.number
	}
	getJob (){
		return "Employee"
	}
}
module.exports = Employee;