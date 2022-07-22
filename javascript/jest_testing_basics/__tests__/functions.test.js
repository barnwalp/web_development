/*
	* Units that have no dependencies are called isolated(solitory) units and units that have dependencies are called sociable units.
	* the output of sociable unit depends on other units of code. it other units fail, the tested unit fails as well.
	* Sociable units can be isolated using mock implementations of their dependencies. Mocks control how dependencies behave during tests, making sociable units predictable to test.
*/

const functions = require('../functions');

test('Testing Addition functions', () => {
	expect(functions.add(2, 2)).toBe(4);
	expect(functions.add(-2, 2)).toBe(0);
	expect(functions.add(0, 3)).toBe(3);
	expect(functions.add(-2, -12)).toBe(-14);
});

test('Testing subtraction function', () => {
	expect(functions.sub(2, 2)).toBe(0);
	expect(functions.sub(-2, 2)).toBe(-4);
	expect(functions.sub(3, 0)).toBe(3);
	expect(functions.sub(0, -12)).toBe(12);
});

test('Object declaration', () =>{
	const obj = {};
	expect(obj).toEqual({});
});

test('truthy vs falsy', () => {
	const n = null;
	expect(n).toBeFalsy();
	expect(n).not.toBeTruthy();
})

// it will run for all tests being done here, if you want to use
// it only for the array section, use it inside the describe block
beforeEach(() => {
	console.log('before each test');
	animals = ['elephant', 'lion', 'jaguar', 'cheetah', 'panther'];
});

describe("animal array", () => {
	it('Pushing animal at the end', () => {
		animals.push('tiger');
		expect(animals[animals.length - 1]).toBe('tiger');
	});

	it('Adding animal at the beginning', () => {
		animals.unshift('aligator');
		expect(animals[0]).toBe('aligator');
	});
})
