const { it, expect } = require("@jest/globals");
const reverseString = require("./task2");

it("reverse string", () => {
	const result = reverseString("abc");
	expect(result).toBe("cba");
});
