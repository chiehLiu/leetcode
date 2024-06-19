class Node {
  constructor(key, next = null) {
      this.key = key;
      this.next = next;
  }
}

class MyHashSet {
  constructor() {
      this.size = 1000;
      this.buckets = Array.from({ length: this.size }, () => null);
  }

  _hash(key) {
      return key % this.size;
  }

  add(key) {
      const hashKey = this._hash(key);
      let node = this.buckets[hashKey];
      while (node !== null) {
          if (node.key === key) return;
          node = node.next;
      }
      this.buckets[hashKey] = new Node(key, this.buckets[hashKey]);
  }

  remove(key) {
      const hashKey = this._hash(key);
      let node = this.buckets[hashKey];
      let prev = null;
      while (node !== null) {
          if (node.key === key) {
              if (prev === null) {
                  this.buckets[hashKey] = node.next;
              } else {
                  prev.next = node.next;
              }
              return;
          }
          prev = node;
          node = node.next;
      }
  }

  contains(key) {
      const hashKey = this._hash(key);
      let node = this.buckets[hashKey];
      while (node !== null) {
          if (node.key === key) return true;
          node = node.next;
      }
      return false;
  }
}

// Example usage:
const hashset = new MyHashSet();
hashset.add(1);
hashset.add(2);
console.log(hashset.contains(1));  // returns true
console.log(hashset.contains(3));  // returns false
hashset.add(2);
console.log(hashset.contains(2));  // returns true
hashset.remove(2);
console.log(hashset.contains(2));  // returns false
