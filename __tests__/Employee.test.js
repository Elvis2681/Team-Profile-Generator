const Employee = require("../lib/Employee");

describe("Employee", () => {
    // initialization group
    describe("initialization", () => {
      it("should have a name", () => {
        const name = "Cherry";
        const id = 1;
        const email = "cherry@fake.com";
        const emp = new Employee(name, id, email);
        expect(emp.name).toBe(name);
        expect(emp.id).toBe(id);
        expect(emp.email).toBe(email);
      });
    });
    describe("getName()", () => {
      it("should return the name", () => {
        const name = "Fakey Jakey";
        const emp = new Employee(name, 1, "fake@email.com");
        const actual = emp.getName();
        expect(actual).toBe(name);
      });
    });
    // group for getId()
    describe("getId()", () => {
        it("should return the id", () => {
          const id = 1;
          const emp = new Employee("Jerry", id, "fake@email.com");
          const actual = emp.getId();
          expect(actual).toBe(id);
        });
      });
    // group for getEmail()
    describe("getEmail()", () => {
        it("should return the email", () => {
          const email = "Genghis@khan.com";
          const emp = new Employee("Jerry", 1, email);
          const actual = emp.getEmail();
          expect(actual).toBe(email);
        });
      });
    describe("getRole()", () => {
        it("should return the 'Employee'", () => {
          const emp = new Employee("Jerry", 1, "Genghis@khan.com");
          const actual = emp.getRole();
          expect(actual).toBe("Employee");
        });
      });
    // group for getRole()—returns 'Employee'
    
  });