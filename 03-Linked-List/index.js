class MyNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = new MyNode(value);
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		this.length++;
		const newNode = new MyNode(value);
		this.tail.next = newNode;
		this.tail = newNode;
		return this;
	}

	prepend(value) {
		this.length++;
		const newNode = new MyNode(value);
		newNode.next = this.head;
		this.head = newNode;
		return this;
	}

	printList() {
		const newArray = [];
		let currentNode = this.head;

		while (currentNode !== null) {
			newArray.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return newArray;
	}

	insert(index, value) {
		if (index >= this.length) {
			this.append(value);
			return;
		}

		if (index === 0) {
			this.append(value);
			return;
		}

		const newNode = new MyNode(value);
		const targetNode = this.traverseToIndex(index - 1);
		const tempNode = targetNode.next;
		targetNode.next = newNode;
		newNode.next = tempNode;
	}

	remove(index) {
		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		const targetNode = this.traverseToIndex(index - 1);
		if (index >= this.length) {
			targetNode.next = null;
			this.tail = targetNode;
			return;
		}

		const removedNode = targetNode.next;
		targetNode.next = removedNode.next;
	}

	traverseToIndex(index) {
		let currentNode = this.head;
		let counter = 0;

		const targetIndex = index <= this.length ? index : this.length - 1;

		while (counter !== targetIndex) {
			counter++;
			currentNode = currentNode.next;
		}
		return currentNode;
	}
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(10, 99);
myLinkedList.insert(2, -22);
console.log(myLinkedList.printList());
myLinkedList.remove(4);

console.log(myLinkedList.printList());
