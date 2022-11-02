const test = [-123, -100, -68, -14, -1, 1, 32, 432, 543, 44324, 234231213152];

console.clear();

const binarySearch = (array, target) => {
	let low = 0;
	let high = array.length - 1;
	let mid = Math.floor((low + high) / 2);

	while (low < high) {
		console.log(`${low}-${mid}-${high}`);
		if (array[mid] === target) return mid;
		if (array[mid] > target) high = mid - 1;
		if (array[mid] < target) low = mid + 1;

		mid = Math.floor((low + high) / 2);
	}
	console.log(`${low}-${mid}-${high}`);
	return array[high] < target ? mid : low;
};
console.log(test[binarySearch(test, -45)]);

// console.log(test[binarySearch(test, -111)]);

/**
 * @param {number} x
 * @return {number}
 */
// console.clear();

// var mySqrt = function (x) {
// 	if (x === 0 || x === 1) return x;

// 	let low = 0;
// 	let high = x;
// 	let guest = 0;
// 	console.log('TRUE: ', Math.trunc(x ** 0.5));

// 	while (low < high) {
// 		guest = Math.floor((low + high) / 2);
// 		console.log(`${low}-${guest}-${high}`);

// 		if (guest * guest === x) {
// 			return guest;
// 		} else if (guest * guest < x) {
// 			low = guest + 1;
// 		} else if (guest * guest > x) {
// 			high = guest - 1;
// 		}
// 	}
// 	console.log('sdf');
// 	return low;
// };

// console.log(mySqrt(3));

/**
 * @param {number} x
 * @return {number}
 */
// console.clear();

// var mySqrt = function (x) {
// 	if (x === 0 || x === 1 || x === 2) return x;

// 	console.log('TRUE: ', Math.trunc(x ** 0.5));
// 	let i = 2;
// 	while (true) {
// 		if (i * i === x) {
// 			return i;
// 		}
// 		if (i * i > x) {
// 			return i - 1;
// 		}
// 		i++;
// 	}
// };

// console.log(mySqrt());
