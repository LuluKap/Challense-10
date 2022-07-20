const Manager = require("../Manager");

describe("Manager", () => {
    it("should be a subclass of Employee", () => {
        const manager = new Manager("");
        expect(manager).toBeInstanceOf(Employee);
    }),
        it("should have an office number", () => {
        const manager = new Manager(1);
        expect(manager.officeNumber).toBe(1);
    });
});
