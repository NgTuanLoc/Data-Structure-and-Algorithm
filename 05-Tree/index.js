console.clear();
class MyNode {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

// class BinarySearchTree {
// 	constructor() {
// 		this.root = null;
// 	}
// 	insert(value) {
// 		const newNode = new MyNode(value);

// 		if (!this.root) {
// 			this.root = newNode;
// 		} else {
// 			let currentNode = this.root;

// 			while (true) {
// 				if (newNode.value < currentNode.value) {
// 					if (!currentNode.left) {
// 						currentNode.left = newNode;
// 						return this;
// 					}

// 					currentNode = currentNode.left;
// 				} else {
// 					if (!currentNode.right) {
// 						currentNode.right = newNode;
// 						return this;
// 					}
// 					currentNode = currentNode.right;
// 				}
// 			}
// 		}
// 	}
// 	lookup(value) {
// 		if (!this.root) return false;

// 		let currentNode = this.root;

// 		while (currentNode) {
// 			if (value < currentNode.value) {
// 				currentNode = currentNode.left;
// 			} else if (value > currentNode.value) {
// 				currentNode = currentNode.right;
// 			} else {
// 				return value;
// 			}
// 		}
// 		return false;
// 	}

// 	remove(value) {
// 		if (!this.root) {
// 			return false;
// 		}
// 		let currentNode = this.root;
// 		let parentNode = null;
// 		while (currentNode) {
// 			if (value < currentNode.value) {
// 				parentNode = currentNode;
// 				currentNode = currentNode.left;
// 			} else if (value > currentNode.value) {
// 				parentNode = currentNode;
// 				currentNode = currentNode.right;
// 			} else if (currentNode.value === value) {
// 				//We have a match, get to work!

// 				//Option 1: No right child:
// 				if (currentNode.right === null) {
// 					if (parentNode === null) {
// 						this.root = currentNode.left;
// 					} else {
// 						//if parent > current value, make current left child a child of parent
// 						if (currentNode.value < parentNode.value) {
// 							parentNode.left = currentNode.left;

// 							//if parent < current value, make left child a right child of parent
// 						} else if (currentNode.value > parentNode.value) {
// 							parentNode.right = currentNode.left;
// 						}
// 					}

// 					//Option 2: Right child which doesn't have a left child
// 				} else if (currentNode.right.left === null) {
// 					currentNode.right.left = currentNode.left;
// 					if (parentNode === null) {
// 						this.root = currentNode.right;
// 					} else {
// 						//if parent > current, make right child of the left the parent
// 						if (currentNode.value < parentNode.value) {
// 							parentNode.left = currentNode.right;

// 							//if parent < current, make right child a right child of the parent
// 						} else if (currentNode.value > parentNode.value) {
// 							parentNode.right = currentNode.right;
// 						}
// 					}

// 					//Option 3: Right child that has a left child
// 				} else {
// 					//find the Right child's left most child
// 					let leftmost = currentNode.right.left;
// 					let leftmostParent = currentNode.right;
// 					while (leftmost.left !== null) {
// 						leftmostParent = leftmost;
// 						leftmost = leftmost.left;
// 					}

// 					//Parent's left subtree is now leftmost's right subtree
// 					leftmostParent.left = leftmost.right;
// 					leftmost.left = currentNode.left;
// 					leftmost.right = currentNode.right;

// 					if (parentNode === null) {
// 						this.root = leftmost;
// 					} else {
// 						if (currentNode.value < parentNode.value) {
// 							parentNode.left = leftmost;
// 						} else if (currentNode.value > parentNode.value) {
// 							parentNode.right = leftmost;
// 						}
// 					}
// 				}
// 				return true;
// 			}
// 		}
// 	}
// }

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(val) {
		const newNode = new MyNode(val);

		if (!this.root) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(node, newNode) {
		if (newNode.value < node.value) {
			if (!node.left) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (!node.right) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	lookup(val) {
		const newNode = new MyNode(val);

		if (this.root.value === newNode.value) return this.root.value;

		return this.lookupNode(this.root, newNode);
	}

	lookupNode(node, newNode) {
		if (!node) {
			return null;
		} else if (node.value > newNode.value) {
			return this.lookupNode(node.left, newNode);
		} else if (node.value < newNode.value) {
			return this.lookupNode(node.right, newNode);
		} else {
			return node;
		}
	}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(10);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree);
console.log(JSON.stringify(traverse(tree.root)));

console.log(tree.lookup(170));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}
