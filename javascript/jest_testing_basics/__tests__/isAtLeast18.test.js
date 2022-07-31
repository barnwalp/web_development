/*
	* A Mock function is a function that replaces the actual implementation of a function with a fake (mock) implementation.
	* With a mock function, we can know the number of times the function was called, the argument it was called with, the result it returned and more. this ability to spy on function calls is why mock functions are also called spies.
*/

// In this scenario, we have two functions, isInteger and isAtLeast18, in which isAtLeast18 is dependent on isInteger. In the current mock test, we are mocking the isInteger function.

const isAtLeast18 = require('../isAtLeast18');
const isInteger = require('../isInteger');

// the mock factory returns the function () => false
// jest.mock('../isInteger', () => () => false);

// Another way to implement mock function where implemention can be changed
jest.mock('../isInteger', () => jest.fn());

// Clear the mock data before each test
beforeEach(() => {
	isInteger.mockClear();
});

describe("isAtLeast18", () => {
	test('isInteger is mocked to return false', () => {
		isInteger.mockImplementation(() => false);

		expect(isAtLeast18(123)).toBe(false);
		expect(isAtLeast18("abc")).toBe(false);
	});
	test('isInteger is mocked to return true', () => {
		isInteger.mockImplementation(() => true);

		expect(isAtLeast18(123)).toBe(true);
		expect(isAtLeast18("abc")).toBe(false);
	});

