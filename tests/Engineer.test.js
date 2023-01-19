const Engineer = require('../Main/Engineer');
const engineer = new Engineer ('John', 'i', 'john@gmail.com', 'engineer');

describe("Getting data", () => {
	it("should get the Engineer data for Engineer object", () =>{
		expect(engineer.name).toBe('John');
		expect(engineer.id).toBe('i');
	 	expect(engineer.email).toBe('john@gmail.com');
		expect(engineer.githubName).toBe('engineer');
	})

	it("should get Engineer name from getName()", () => {
	expect(engineer.getName()).toBe('John');
	});

	it("should get Engineer id from getId()", () => {
			expect(engineer.getId()).toBe('i');
	});

	it ("should get Engineer githubName from getGithubName()", () => {
		expect(engineer.getGithubName()).toBe('engineer');
	});

	it("should get Engineer job from getJob()", () => {
			expect(engineer.getJob()).toBe('Engineer');
	});
})

