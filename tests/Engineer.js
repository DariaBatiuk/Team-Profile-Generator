const Engineer = require('../Main/Engineer');
const engineer = new Engineer ('John, i, john@gmail.com, engineer');


test('getting the engineer data for engineer object', () =>{
	expect(engineer.name).toBe('John');
	expect(engineer.id).toBe('i');
	expect(engineer.email).toBe('john@gmail.com');
	expect(engineer.githubName).toBe('engineer');
});

test('getting Engineer name from getName()', () => {
	expect(engineer.getName().toBe('John'));
});
test('getting Engineer id from getId()', () => {
	expect(engineer.getId().toBe('i'));
});
test('getting Engineer email from getEmail()', () => {
	expect(engineer.getEmail().toBe('john@gmail.com'));
});
test('getting Engineer githubName from getGithubName()', () => {
	expect(engineer.getGithubName().toBe('engineer'));
});
test('getting Engineer job from getJob()', () => {
	expect(engineer.getJob().toBe('Engineer'));
});