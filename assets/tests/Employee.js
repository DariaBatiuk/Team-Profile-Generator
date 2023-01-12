const Employee = require('../Main/Employee.js');
const employee = new Employee ('John, i, john@gmail.com');


test('getting the Employee data for Employee object', () =>{
	expect(employee.name).toBe('John');
	expect(employee.id).toBe('i');
	expect(employee.email).toBe('john@gmail.com');
});

test('getting Employee name from getName()', () => {
	expect(employee.getName().toBe('John'));
});
test('getting Employee id from getId()', () => {
	expect(employee.getId().toBe('i'));
});
test('getting Employee email from getEmail()', () => {
	expect(employee.getEmail().toBe('john@gmail.com'));
});
test('getting Employee job from getJob()', () => {
	expect(employee.getJob().toBe('Employee'));
});