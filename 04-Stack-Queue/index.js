class MyNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
// STACKS

// // Stack
// class Stack {
// 	constructor() {
// 		this.top = null;
// 		this.bottom = null;
// 		this.length = 0;
// 	}

// 	peek() {
// 		return this.top;
// 	}

// 	push(value) {
// 		const newNode = new MyNode(value);
// 		if (!this.length) {
// 			this.top = newNode;
// 			this.bottom = newNode;
// 		} else {
// 			const tempNode = this.top;
// 			this.top = newNode;
// 			this.top.next = tempNode;
// 		}
// 		this.length++;
// 		return this;
// 	}

// 	pop() {
// 		if (!this.length) return null;
// 		if (this.bottom === this.top) this.bottom = null;

// 		this.top = this.top.next;
// 		this.length--;
// 		return this;
// 	}
// }

// class Stack {
// 	constructor() {
// 		this.array = [];
// 	}
// 	peek() {
// 		return this.array[this.array.length - 1];
// 	}
// 	push(value) {
// 		this.array.push(value);
// 		return this;
// 	}
// 	pop() {
// 		this.array.pop();
// 		return this;
// 	}
// }

// const myStack = new Stack();

// console.log('===============================================');
// myStack.push('a');
// myStack.push('b');
// myStack.push('c');
// myStack.push('d');

// myStack.pop();
// myStack.pop();
// myStack.pop();
// // myStack.pop();

// console.log('🚀 ~ file: index.js ~ line 40 ~ myStack', myStack);

// QUEUES
class Queues {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	peek() {
		return this.first;
	}

	enqueue(value) {
		const newNode = new MyNode(value);

		if (!this.length) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const temp = this.last;
			this.last = newNode;
			temp.next = newNode;
		}

		this.length++;
		return this;
	}

	dequeue() {
		if (!this.length) return null;

		if (this.first === this.last) this.last = null;

		this.first = this.first.next;

		this.length--;
		return this;
	}
}

const myQueue = new Queues();

console.log('===============================================');
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.enqueue('d');

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
// myQueue.dequeue();

console.log('🚀 ~ file: index.js ~ line 122 ~ myQueue', myQueue);
