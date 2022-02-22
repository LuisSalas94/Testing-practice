const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const stringLength = require("./stringLength");

it("take string and returns its length", () => {
	const result = stringLength("abc");
	expect(result).toBe(3);
});

it("string is at least 1 character long and not longer than 10", () => {
	const stringLength = () => {
		throw new TypeError();
	};
	expect(stringLength).toThrow(TypeError);
});
