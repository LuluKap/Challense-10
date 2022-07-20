const Intern = require('../Intern');

describe('Intern', () => {
    it ('should be a subclass of Employee', () => {
        const intern = new Intern('');
        expect(intern).toBeInstanceOf(Employee);
    }),
    it('should have a school', () => {
        const intern = new Intern('school');
        expect(intern.school).toBe('school');
    });
});