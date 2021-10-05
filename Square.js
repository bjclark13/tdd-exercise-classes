class Square {
	constructor(length, color = 'white') {
		this.length = length;

        this.validateLength();

		this.color = color;
	}

    getArea() {
        return this.length * this.length; // return length * length, which is the square's area
    }

    printInfo() {
        console.log(`Color: ${this.color}, Length: ${this.length}`);
    }

	validateLength() {
		if (!this.length) {
			throw new Error('Length is required');
		}

		if (this.length <= 0) {
			throw new Error('Length must be positive');
		}

		if (typeof this.length !== 'number') {
			throw new Error('Length must be a number');
		}
	}
}

module.exports = Square;
