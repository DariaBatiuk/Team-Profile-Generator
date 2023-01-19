const Employee = require('../Main/Employee.js');
const employee = new Employee ('John', 'i', 'john@gmail.com');

describe("Getting data", () => {
	it("should get the Employee data for Employee object", () =>{
		expect(employee.name).toBe('John');
		expect(employee.id).toBe('i');
	 	expect(employee.email).toBe('john@gmail.com');
	})

	it("should get Employee name from getName()", () => {
	expect(employee.getName()).toBe('John');
	});

	it("should get Employee id from getId()", () => {
			expect(employee.getId()).toBe('i');
	});

	it("should get Employee job from getJob()", () => {
			expect(employee.getJob()).toBe('Employee');
	});
});




