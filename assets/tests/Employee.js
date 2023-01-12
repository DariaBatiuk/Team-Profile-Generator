const Employee = require('../Main/Employee.js');
const employee = new Employee ('John, i, john@gmail.com, 1');


test('getting the Employee data for Employee object', () =>{
	expect(employee.name).toBe('John');
	expect(employee.id).toBe('i');
	expect(employee.email).toBe('john@gmail.com');
	expect(employee.number).toBe('1');
});

test('getting Employee name from getName()', () => {
	expect(employee.getName().toBe('John'));
});
test('getting Employee name from getId()', () => {
	expect(employee.getId().toBe('i'));
});
test('getting Employee name from getEmail()', () => {
	expect(employee.getEmail().toBe('john@gmail.com'));
});
test('getting Employee name from getNumber()', () => {
	expect(employee.getNymber().toBe('1'));
});