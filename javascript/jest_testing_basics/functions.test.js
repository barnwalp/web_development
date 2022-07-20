const functions = require('./functions');

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
