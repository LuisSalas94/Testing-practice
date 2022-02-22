const { it, expect } = require("@jest/globals");
const Calculator = require("./task3");
const calculator = new Calculator();

describe("Add Method Test", () => {
	it("add 2 + 2", () => {
		expect(calculator.add(2, 2)).toBe(4);
	});

	it("negative numbers", () => {
		expect(calculator.add(-8, 3)).toBe(-5);
	});

	it("undefined", () => {
		expect(calculator.add(-8, 3)).not.toBe(undefined);
	});
});

describe("Subtract Method Test", () => {
	it("subtract 4-2", () => {
		expect(calculator.subtract(4, 2)).toBe(2);
	});

	it("negative numbers", () => {
		expect(calculator.subtract(-5, 5)).toBe(-10);
	});

	it("undefined", () => {
		expect(calculator.subtract(-5, 5)).not.toBe(undefined);
	});
});

describe("Multiply Method Test", () => {
	it("multiply 4*4", () => {
		expect(calculator.multiply(4, 4)).toBe(16);
	});

	it("negative numbers", () => {
		expect(calculator.multiply(-4, 4)).toBe(-16);
	});

	it("undefined", () => {
		expect(calculator.multiply(-4, 4)).not.toBe(undefined);
	});
});
