import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./utils";

describe("capitalize", () => {
  test("capitalizes first character", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("works with single character", () => {
    expect(capitalize("a")).toBe("A");
  });

  test("works with empty string", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("reverseString", () => {
  test("reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("works with single character", () => {
    expect(reverseString("a")).toBe("a");
  });

  test("works with empty string", () => {
    expect(reverseString("")).toBe("");
  });
});

describe("Calculator", () => {
  test("adds two numbers", () => {
    expect(Calculator.add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(Calculator.subtract(5, 3)).toBe(2);
  });

  test("multiplies two numbers", () => {
    expect(Calculator.multiply(4, 3)).toBe(12);
  });

  test("divides two numbers", () => {
    expect(Calculator.divide(6, 2)).toBe(3);
  });

  test("throws error when dividing by zero", () => {
    expect(() => Calculator.divide(5, 0)).toThrow("Cannot divide by zero");
  });
});

describe("caesarCipher", () => {
  test("shifts letters correctly", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  test("wraps from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("preserves punctuation and spaces", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("analyzeArray", () => {
  test("analyzes array correctly", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("works with single number", () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("works with empty array", () => {
    const result = analyzeArray([]);
    expect(result).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    });
  });
});
