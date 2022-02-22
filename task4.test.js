const { it, expect } = require("@jest/globals");
const capitalize = require("./task4");

it("capitalize function", () => {
	expect(capitalize("abc")).toBe("Abc");
});
