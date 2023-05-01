class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if (!currentBucket) {
            return undefined;
        }

        for (let index = 0; index < currentBucket.length; index++) {
            const [itemKey, itemValue] = currentBucket[index];

            if (key === itemKey) {
                return itemValue;
            }
        }
    }

    set(key, value) {
        const address = this.hashMethod(key);

        // Con esta condicional, cuando haya collision evitamos borrar los otros datos
        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
        return this.data;
    }

    remove(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if (!currentBucket) {
            return undefined;
        }

        for (let index = 0; index < currentBucket.length; index++) {
            const [itemKey, itemValue] = currentBucket[index];

            if (key === itemKey) {
                const deletedItem = currentBucket[index];
                currentBucket.splice(index, 1);
                return deletedItem;
            }
        }
    }

    getAllKeys() {
        const array = this.data;
        let key = [];

        array.forEach((e) => {
            e.forEach((k) => {
                key.push(k[0]);
            });
        });
        return key;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
myHashTable.set("Huerta", 1998);
console.log(myHashTable.getAllKeys());
// myHashTable.get("Mariana");
// myHashTable.remove("Diego");
