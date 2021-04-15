const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it.todo("check engineer init");
    });
    describe('getrole()', () => {
        it('should return "Engineer"', () => {
        const name = "Fakey Jakey";
        const emp = new Engineer(name, 1, "fake@email.com", 10);
        const actual = emp.getRole();
        expect(actual).toBe("Engineer");
    });
  }); 
});
test("Engineer smoke test",() => {});