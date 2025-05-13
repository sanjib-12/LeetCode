function WordNode() {
   this.children = new Map();
   this.isEndOfWord = false;
}

var WordDictionary = function () {
   this.root = new WordNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
   let node = this.root;
   for (let char of word) {
      if (!node.children.has(char)) {
         node.children.set(char, new WordNode());
      }
      node = node.children.get(char);
   }
   node.isEndOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
   const dfs = (node, i) => {
      if(i === word.length) return node.isEndOfWord;

      const char = word[i];

      if(char === '.'){
         for(let child of node.children.values()){
            if(dfs(child, i+1)) return true;

         }
         return false;
      }else {
         if(!node.children.has(char)) return false;
         return dfs(node.children.get(char), i+1);
      }
   };
   return dfs(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True