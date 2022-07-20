const Employee = require('../Employee');

describe('Employee', () => {
  it('should have a name', () => {
    const employee = new Employee('John');
    expect(employee.name).toBe('John');
  })

  it('should have an id', () => {
    const employee = new Employee();
    expect(employee.id).toBe('4');
  });

  it('should have an email', () => {
    const employee = new Employee();
    expect(employee.email).toBe((employee.name).toLowerCase() + '@company.com');
  });
  it('should have a role', () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe('Employee');
  });
});
        