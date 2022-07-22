const isInteger = (num) => {
	return Number.isInteger(num);
}

describe('isInteger', () => {
	const intNumber = [-1, 0, 1];

	test.each(intNumber) (
		"isInteger passes for integer value %j",
		(fixture) => expect(isInteger(fixture)).toBe(true)
	);

	const floatNumber = [-10.2, 5.2, 55.3, 2.4];

	test.each(floatNumber) (
		"fails for non-integer value %j",
		(fixture) => expect(isInteger(fixture)).toBe(false)
	);

})

