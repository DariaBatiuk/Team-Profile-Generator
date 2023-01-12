const Manager = require('../Main/Manager');
const manager = new Manager ('John, i, john@gmail.com, 1');


test('getting the Employee data for Manager object', () =>{
	expect(manager.name).toBe('John');
	expect(manager.id).toBe('i');
	expect(manager.email).toBe('john@gmail.com');
	expect(manager.number).toBe('1');
});

test('getting Employee name from getName()', () => {
	expect(manager.getName().toBe('John'));
});
test('getting Employee name from getId()', () => {
	expect(manager.getId().toBe('i'));
});
test('getting Employee name from getEmail()', () => {
	expect(manager.getEmail().toBe('john@gmail.com'));
});
test('getting Employee name from getNumber()', () => {
	expect(manager.getEmail().toBe('1'));
});
test('getting job from getJob()', () => {
	expect(manager.getJob().toBe('Manager'));
});
