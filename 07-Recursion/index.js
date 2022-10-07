// O(2 ^ n);

const factorial = (number) => {
	if (number === 1) return 1;

	return number * factorial(number - 1);
};

const fibonacci = (number) => {
	if (number < 2) return number;
	return fibonacci(number - 1) + fibonacci(number - 2);
};

const exponent = (base, exp) => {
	if (exp === 1) return base;
	return base * exponent(base, exp - 1);
};

console.clear();
// console.log(factorial(5));
// console.log(fibonacci(19));
console.log(exponent(8, 3));

console.log(8 ** 3);
