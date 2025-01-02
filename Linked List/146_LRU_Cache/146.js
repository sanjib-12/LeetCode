/**
 * Node constructor for the doubly linked list
 * Using function declaration for better performance over arrow functions
 * Minimizing property initialization for reduced memory footprint
 */
function Node(key, val) {
   this.key = key;
   this.val = val;
   this.prev = null;
   this.next = null;
}

/**
 * Optimized LRU Cache implementation with O(1) operations
 * Key optimizations:
 * 1. Maintains size counter instead of using Object.keys()
 * 2. Minimizes object property lookups
 * 3. Uses function declarations for better performance
 * 4. Reduces memory allocation
 */
function LRUCache(capacity) {
   // Cache initialization with minimum required properties
   this.size = 0;
   this.cap = capacity;
   this.cache = Object.create(null); // Faster than {} as it has no prototype chain

   // Dummy nodes initialization with minimal properties
   this.left = new Node(0, 0);
   this.right = new Node(0, 0);
   this.left.next = this.right;
   this.right.prev = this.left;
}

/**
 * Optimized node removal from doubly linked list
 * Minimizes variable creation and property lookups
 */
LRUCache.prototype._remove = function (node) {
   node.prev.next = node.next;
   node.next.prev = node.prev;
};

/**
 * Optimized node insertion at most recently used position
 * Uses direct property assignment for better performance
 */
LRUCache.prototype._insert = function (node) {
   const rightPrev = this.right.prev;
   rightPrev.next = node;
   node.prev = rightPrev;
   node.next = this.right;
   this.right.prev = node;
};

/**
 * Optimized get operation
 * Uses direct property access and minimizes conditions
 */
LRUCache.prototype.get = function (key) {
   const node = this.cache[key];
   if (!node) return -1;

   // Update position only if not already most recent
   if (node.next !== this.right) {
      this._remove(node);
      this._insert(node);
   }
   return node.val;
};

/**
 * Optimized put operation
 * Uses size counter instead of Object.keys()
 * Minimizes object creation and property lookups
 */
LRUCache.prototype.put = function (key, value) {
   const existingNode = this.cache[key];

   if (existingNode) {
      // Update existing node
      this._remove(existingNode);
      existingNode.val = value;
      this._insert(existingNode);
   } else {
      // Create new node
      const node = new Node(key, value);
      this.cache[key] = node;
      this._insert(node);
      this.size++;

      // Remove LRU if over capacity
      if (this.size > this.cap) {
         const lru = this.left.next;
         this._remove(lru);
         delete this.cache[lru.key];
         this.size--;
      }
   }
};

// Test the implementation
const lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1)); // cache is {1=1}
console.log(lRUCache.put(2, 2)); // cache is {1=1, 2=2}
console.log(lRUCache.get(1)); // returns 1
console.log(lRUCache.put(3, 3)); // evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2)); // returns -1 (not found)
console.log(lRUCache.put(4, 4)); // evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1)); // returns -1 (not found)
console.log(lRUCache.get(3)); // returns 3
console.log(lRUCache.get(4)); // returns 4
