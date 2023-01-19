const Intern = require('../Main/Intern');
const intern = new Intern ('John', 'i', 'john@gmail.com', 'MonctonHigh');

describe("Getting data", () => {
	it("should get the Intern data for Intern object", () =>{
		expect(intern.name).toBe('John');
		expect(intern.id).toBe('i');
	 	expect(intern.email).toBe('john@gmail.com');
		expect(intern.school).toBe('MonctonHigh');
	})

	it("should get Intern name from getName()", () => {
	expect(intern.getName()).toBe('John');
	});

	it("should get Intern id from getId()", () => {
			expect(intern.getId()).toBe('i');
	});

	it ("should get Intern number from getNumber()", () => {
		expect(intern.getschool()).toBe('MonctonHigh');
	});

	it("should get Intern job from getJob()", () => {
			expect(intern.getJob()).toBe('Intern');
	});
})

// test('getting the Intern data for Intern object', () =>{
// 	expect(intern.name).toBe('John');
// 	expect(intern.id).toBe('i');
// 	expect(intern.email).toBe('john@gmail.com');
// 	expect(intern.school).toBe('MonctonHigh');
// });

// test('getting Intern name from getName()', () => {
// 	expect(intern.getName().toBe('John'));
// });
// test('getting Intern id from getId()', () => {
// 	expect(intern.getId().toBe('i'));
// });
// test('getting Intern email from getEmail()', () => {
// 	expect(intern.getEmail().toBe('john@gmail.com'));
// });
// test('getting Intern number from getNumber()', () => {
// 	expect(intern.getschool().toBe('MonctonHigh'));
// });
// test('getting Intern job from getJob()', () => {
// 	expect(intern.getJob().toBe('Intern'));
// });