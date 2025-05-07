# Testing Practice

This project is part of The Odin Project's JavaScript curriculum, focusing on Test-Driven Development (TDD) using Jest.

## Functions

The project implements and tests the following functions:

1. `capitalize(string)` - Takes a string and returns it with the first character capitalized

2. `reverseString(string)` - Takes a string and returns it reversed

3. `Calculator` - An object with basic arithmetic operations:
   - `add(a, b)` - Adds two numbers
   - `subtract(a, b)` - Subtracts the second number from the first
   - `divide(a, b)` - Divides the first number by the second (includes zero division check)
   - `multiply(a, b)` - Multiplies two numbers

4. `caesarCipher(string, shift)` - Implements the Caesar cipher:
   - Shifts each character in the string by the shift factor
   - Preserves case (uppercase/lowercase)
   - Handles wrapping from z to a
   - Preserves punctuation and spaces

5. `analyzeArray(array)` - Takes an array of numbers and returns an object with:
   - `average` - Average of all numbers
   - `min` - Minimum value
   - `max` - Maximum value
   - `length` - Length of the array

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AhmadAbdelaziz8/odin-testing-practice.git
   cd odin-testing-practice
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npm test
   ```

## Technologies Used

- JavaScript (ES6+)
- Jest (Testing Framework)
- Babel (JavaScript Compiler)

## Project Structure

- `utils.js` - Contains all function implementations
- `utils.test.js` - Contains all test cases
- `babel.config.js` - Babel configuration for ES6+ support

## License

ISC 