const Manager = require('../Main/Manager');
const manager = new Manager ('John', 'i', 'john@gmail.com', '1');

describe("Getting data", () => {
	it("should get the Manager data for Manager object", () =>{
		expect(manager.name).toBe('John');
		expect(manager.id).toBe('i');
	 	expect(manager.email).toBe('john@gmail.com');
		expect(manager.number).toBe('1');
	})

	it("should get Manager name from getName()", () => {
	expect(manager.getName()).toBe('John');
	});

	it("should get Manager id from getId()", () => {
			expect(manager.getId()).toBe('i');
	});

	it("should get Manager number from getNumber()", () => {
		expect(manager.getNumber()).toBe('1');
	});

	it("should get Manager job from getJob()", () => {
			expect(manager.getJob()).toBe('Manager');
	});
})
