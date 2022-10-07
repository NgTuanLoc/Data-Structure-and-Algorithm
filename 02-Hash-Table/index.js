class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let index = 0; index < key.length; index++) {
			hash = (hash + key.charCodeAt(index) * index) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		let address = this._hash(key);

		if (!this.data[address]) {
			this.data[address] = [];
		}

		this.data[address].push([key, value]);
		return this.data;
	}

	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		const result = [];

		if (currentBucket) {
			for (let index = 0; index < currentBucket.length; index++) {
				result.push(currentBucket[index][1]);
			}
			return result;
		}

		return undefined;
	}

	getKeys() {
		if (!this.data.length) return undefined;

		let result = [];

		for (let index = 0; index < this.data.length; index++) {
			if (this.data[index] && this.data[index].length) {
				if (this.data.length > 1) {
					for (
						let collisionKey = 0;
						collisionKey < this.data[index].length;
						collisionKey++
					) {
						result.push(this.data[index][collisionKey][0]);
					}
				} else {
					result.push(this.data[i][0]);
				}
			}
		}
		return result;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('grapes', 20000);
myHashTable.set('grapes', 22000);
myHashTable.set('oranges', 20000);
myHashTable.set('apples', 9);
console.log(myHashTable.get('oranges'));
console.log(myHashTable.getKeys());
