const Manager = require('../Main/Manager');
const manager = new Manager ('John, i, john@gmail.com, 1');


test('getting the Manager data for Manager object', () =>{
	expect(manager.name).toBe('John');
	expect(manager.id).toBe('i');
	expect(manager.email).toBe('john@gmail.com');
	expect(manager.number).toBe('1');
});

test('getting Manager name from getName()', () => {
	expect(manager.getName().toBe('John'));
});
test('getting Manager id from getId()', () => {
	expect(manager.getId().toBe('i'));
});
test('getting Manager email from getEmail()', () => {
	expect(manager.getEmail().toBe('john@gmail.com'));
});
test('getting Manager number from getNumber()', () => {
	expect(manager.getNumber().toBe('1'));
});
test('getting Manager job from getJob()', () => {
	expect(manager.getJob().toBe('Manager'));
});
