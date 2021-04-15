const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it.todo("check manager init");
    });
    describe('getrole()', () => {
        it('should return "Manager"', () => {
        const name = "Fakey Jakey";
        const emp = new Manager(name, 1, "fake@email.com", 10);
        const actual = emp.getRole();
        expect(actual).toBe("Manager");
    });
  }); 
});
test("Manager smoke test",() => {});