const { expect } = require('@jest/globals');
const Square = require('./Square'); // importing the Square class from Square.js

describe('new Square()', () => {
	test('Should be able to initialize square with length and color', () => {
		// Arrange
		const square = new Square(2, 'black');

		// Act -- skipped
		// Assert
		// confirm that we're setting square.length and square.color
		expect(square.length).toBeDefined();
		expect(square.color).toBeDefined();

		// or 

		expect(square).toHaveProperty('length');
		expect(square).toHaveProperty('color');
	});

	test('Color should default to white', () => {
		// Arrange
		const square = new Square(3);

		// color should be white
		expect(square).toHaveProperty('color', 'white');
	});

	test('If not length is given, trigger an error', () => {
		// arrange
		function callWithNoLength() {
			const square = new Square();
		}

		expect(callWithNoLength).toThrowError(new Error("Length is required"));
	});

	test('If not length is 0 or less, trigger an error', () => {
		// arrange
		function callWithNoLength() {
			const square = new Square(-1);
		}

		expect(callWithNoLength).toThrowError();
	});

	test('If not length is not a number, trigger an error', () => {
		// arrange
		function callWithNoLength() {
			const square = new Square('123');
		}

		expect(callWithNoLength).toThrowError();
	});
});

describe('Square.getArea()', () => {
	test('Length of 3 should return area of 9', () => {
		// Arrange
		const square = new Square(3);

		// Act 
		const area = square.getArea(); // 9

		// Assert
		expect(area).toBe(9);
	});

	test('Length of 1 should return area of 1', () => {
		// Arrange
		const square = new Square(1);

		// Act 
		const area = square.getArea(); // 9

		// Assert
		expect(area).toBe(1);
	});

	test('Length of 40 should return area of 1600', () => {
		// Arrange
		const square = new Square(40);

		// Act 
		const area = square.getArea(); // 9

		// Assert
		expect(area).toBe(1600);

	});
});

// describe('Square.getColor()', () => {
// 	test('Color red should return #FF0000', () => {
// 		// TODO
// 		expect(true).toBe(false);
// 	});

// 	test('Color blue should return #0000FF', () => {
// 		// TODO
// 		expect(true).toBe(false);
// 	});

// 	test('Color not red or blue should return the same color given', () => {
// 		// TODO
// 		expect(true).toBe(false);
// 	});
// });

describe('Square.printInfo()', () => {
	test('Black square with length 7 should console.log() properly', () => {
		// console.log should be (exactly):
		// Color: black, Length: 7
		// creating a mock function
		const square = new Square(7, 'black');

		console.log = jest.fn(); // overriding console.log, so we can track to see if it's called

		square.printInfo(); // calling the function

		expect(console.log).toHaveBeenCalledWith('Color: black, Length: 7')
	});
});
