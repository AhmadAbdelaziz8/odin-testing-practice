export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return string.split("").reverse().join("");
}

export const Calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

export function caesarCipher(string, shift) {
  return string
    .split("")
    .map((char) => {
      if (!/[a-zA-Z]/.test(char)) return char;

      const isUpperCase = char === char.toUpperCase();
      const charCode = char.charCodeAt(0);
      const base = isUpperCase ? 65 : 97;
      const shifted = ((((charCode - base + shift) % 26) + 26) % 26) + base;

      return String.fromCharCode(shifted);
    })
    .join("");
}

export function analyzeArray(array) {
  if (array.length === 0) {
    return {
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    };
  }

  return {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
