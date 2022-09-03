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
		const address = this._hash(key);
		const currentBucket = this.data[address];

		if (currentBucket) {
			for (let index = 0; index < currentBucket.length; index++) {
				if (currentBucket[index][0] === key) return currentBucket[index][1];
			}
		}

		return undefined;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
console.log(myHashTable.get('apples'));
