/*
	* Using mocks, one can control the return of a function dependency, not matter what arguments it is called with.
	* Mock functions help manipulate the control flow of the tested program and reach even those difficult to reproduce edge cases when writing test.
*/

// In this scenario, we have two functions, isInteger and isAtLeast18, in which isAtLeast18 is dependent on isInteger. In the current mock test, we are mocking the isInteger function.

const isAtLeast18 = require('../isAtLeast18');

// the mock factory returns the function () => false
jest.mock('../isInteger', () => () => false);

describe('isAtLeast18', () => {
	test('fails if value is not recognised as integer', () => {
		// should pass but fails because of the isInteger mock
		expect(isAtLeast18(19)).toBe(false);
		// should fail either way
		expect(isAtLeast18("ab")).toBe(false);
	})
})
