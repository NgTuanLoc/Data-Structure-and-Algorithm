console.clear();
console.log('================================');

const arr = [-23, 3, 13, -2, 312, -1, 2, 4134, -3];
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const test = () => {
// 	console.log('A');

// 	const a = () => {
// 		console.log('B');
// 	};
// 	setTimeout(a, 1000);

// 	console.log('C');
// };
// let promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (1 === 1) {
// 			reject('Wrong!');
// 		}
// 		resolve('done');
// 	}, 3000);
// });

// const asyncTest = async () => {
// 	try {
// 		console.log('A');
// 		const test = await promise;
// 		console.log(test);
// 		console.log('C');
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// console.log('Ended');

// asyncTest();
const p1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);
});
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(2), 2000);
});
const p3 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(3), 3000);
});
const p4 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(4), 4000);
});
const p5 = new Promise((resolve, reject) => {
	resolve(5);
	// setTimeout(() => reject(new Error('reject')), 5000);
});

// Using .catch:
Promise.all([p1, p2, p3, p4, p5])
	.then((values) => {
		console.log(values);
		return values.map((item) => item + 3);
	})
	.then((values) => {
		console.log(values);
	})
	.catch((error) => {
		console.error(error.message);
	});
