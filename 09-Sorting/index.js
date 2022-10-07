const testArray = [8, 5, 7, 3, 4, 11, 6, -1];

console.clear();
console.log('===============Bubble Sort O(n^2)===============');
const bubbleSort = (array) => {
	const tempArray = [...array];
	const length = tempArray.length;
	for (let i = 0; i < length; i++) {
		for (let j = i + 1; j < length; j++) {
			if (tempArray[i] > tempArray[j]) {
				// Swap => A largest number will be on right side
				const temp = tempArray[i];
				tempArray[i] = tempArray[j];
				tempArray[j] = temp;
			}
		}
	}
	return tempArray;
};

console.log(bubbleSort(testArray).join(' < '));

console.log('===============Selection Sort O(n^2)===============');
const selectionSort = (array) => {
	const tempArray = [...array];
	const length = tempArray.length;
	for (let i = 0; i < length; i++) {
		let minIndex = i;
		let temp = tempArray[i];
		for (let j = i + 1; j < length; j++) {
			if (temp > tempArray[j]) {
				minIndex = j;
			}
		}
		tempArray[i] = tempArray[minIndex];
		tempArray[minIndex] = temp;
	}

	return tempArray;
};

console.log(selectionSort(testArray).join(' < '));

console.log('===============Insertion Sort===============');
const insertionSort = (array) => {
	const tempArray = [...array];
	const length = tempArray.length;

	for (let i = 0; i < length; i++) {
		if (tempArray[0] > tempArray[i]) {
			tempArray.unshift(tempArray.splice(i, 1)[0]);
		} else {
			for (let j = 1; j < i; j++) {
				if (tempArray[i] > tempArray[j - 1] && tempArray[i] < tempArray[j]) {
					tempArray.splice(j, 0, tempArray.splice(i, 1)[0]);
				}
			}
		}
	}
	return tempArray;
};
console.log(insertionSort(testArray).join(' < '));

console.log('===============Merge Sort===============');
const mergeSort = (array) => {
	if (array.length === 1) {
		return array;
	}
	// Split Array in into right and left
	const length = array.length;
	const middle = Math.floor(length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);
	// console.log('left:', left);
	// console.log('right:', right);

	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}
	// console.log(left, right)
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.log(mergeSort(testArray).join(' < '));

console.log('===============Quick Sort===============');
function quickSort(array, left, right) {
	let pivot;
	let partitionIndex;

	if (left < right) {
		pivot = right;
		partitionIndex = partition(array, pivot, left, right);

		//sort left and right
		quickSort(array, left, partitionIndex - 1);
		quickSort(array, partitionIndex + 1, right);
	}
	return array;
}

function partition(array, pivot, left, right) {
	let pivotValue = array[pivot];
	let partitionIndex = left;

	for (let i = left; i < right; i++) {
		if (array[i] < pivotValue) {
			swap(array, i, partitionIndex);
			partitionIndex++;
		}
	}
	swap(array, right, partitionIndex);
	return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
	let temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}

quickSort(testArray, 0, testArray.length - 1);
console.log(testArray.join(' < '));
