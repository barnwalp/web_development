const isInteger = require('./isInteger');

const isAtLeast18 = (num) => {
	return isInteger(num) && num >= 18;
}

module.exports = isAtLeast18;
