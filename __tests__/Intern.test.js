const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it.todo("check intern init");
    });
    describe('getrole()', () => {
        it('should return "Intern"', () => {
        const name = "Fakey Jakey";
        const emp = new Intern(name, 1, "fake@email.com", 10);
        const actual = emp.getRole();
        expect(actual).toBe("Intern");
    });
  }); 
});
test("Intern smoke test",() => {});