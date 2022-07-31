const Validator = require('../Validator');

describe("Validator", () => {
	const validator = new Validator();

	test("defines setRule()", () => {
		expect(typeof validator.setRule).toBe("function")
	});

	test("setRule() returns undefined when called without argument", () => {
		expect(validator.setRule()).toBeUndefined();
	});

	test("setRule() is called with arguments", () => {
		// jest.spyOn() is called with object and the object method identifier
		// we're spying on. The return value is a mock function (spy) with
		// a reference to the specific object method.
		const setRuleSpy = jest.spyOn(validator, "setRule");

		// Create a mock rule for use as a function argument.
		const trueRule = jest.fn(() => true);

		const result = validator.setRule("true", trueRule);
		expect(result).toBeUndefined();

		// Check the spy if the method was called correctly
		expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);
		setRuleSpy.mockClear();
	})
})
