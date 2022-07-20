const Engineer = require('../engineer');

describe('Engineer', () => {
    it ('should be a subclass of Employee', () => {
        const engineer = new Engineer('');
        expect(engineer).toBeInstanceOf(Employee);
    })

    it('should have a github username', () => {
        const engineer = new Engineer('githubUserName');
        expect(engineer.github).toBe('githubUserName');
    });
});
