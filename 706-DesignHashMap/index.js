class MyHashMap {
  constructor() {
      this.size = 1000;
      this.map = new Array(this.size).fill(null).map(() => []);
  }

  // Hash function to compute the index for a key
  _hash(key) {
      return key % this.size;
  }

  // Put a key-value pair into the HashMap
  put(key, value) {
      const hashKey = this._hash(key);
      for (let i = 0; i < this.map[hashKey].length; i++) {
          if (this.map[hashKey][i][0] === key) {
              this.map[hashKey][i][1] = value;
              return;
          }
      }
      this.map[hashKey].push([key, value]);
  }

  // Retrieve the value for a given key
  get(key) {
      const hashKey = this._hash(key);
      for (let i = 0; i < this.map[hashKey].length; i++) {
          if (this.map[hashKey][i][0] === key) {
              return this.map[hashKey][i][1];
          }
      }
      return -1;
  }

  // Remove the mapping for a given key
  remove(key) {
      const hashKey = this._hash(key);
      for (let i = 0; i < this.map[hashKey].length; i++) {
          if (this.map[hashKey][i][0] === key) {
              this.map[hashKey].splice(i, 1);
              return;
          }
      }
  }
}

// Example usage:
const hashMap = new MyHashMap();
hashMap.put(1, 1); // Insert (1, 1)
hashMap.put(2, 2); // Insert (2, 2)
console.log(hashMap.get(1)); // Output: 1
console.log(hashMap.get(3)); // Output: -1 (not found)
hashMap.put(2, 1); // Update (2, 2) to (2, 1)
console.log(hashMap.get(2)); // Output: 1
hashMap.remove(2); // Remove key 2
console.log(hashMap.get(2)); // Output: -1 (not found)
