/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// var ladderLength = function(beginWord, endWord, wordList) {

//    const visited = new Set();
//    const queue = [[beginWord,0]];
//    while(queue.length > 0){
//       let [curr, count] = queue.shift();
//       visited.add(curr);
//       if(curr === endWord) return count+1;

//       for(let word of wordList){
//          let diff = 0;
//          for(let i = 0; i < beginWord.length; i++){
//             if(word[i] !== curr[i]) diff++;
//          }

//          if(diff === 1 && !visited.has(word)){
//             queue.push([word, count+1]);
//             visited.add(word);
//          }
//       }
//    }
//    return 0;
// };

var ladderLength = function (beginWord, endWord, wordList) {
   const wordSet = new Set(wordList);
   if (!wordSet.has(endWord)) return 0;

   const graph = new Map(); 
   const L = beginWord.length;

   for (let word of wordSet) {
      for (let i = 0; i < L; i++) {
         const key = word.slice(0, i) + '*' + word.slice(i + 1);
         if (!graph.has(key)) graph.set(key, []);
         graph.get(key).push(word);
      }
   }

   const queue = [[beginWord, 1]];
   const visited = new Set([beginWord]);

   while (queue.length > 0) {
      let [word, level] = queue.shift();
      for (let i = 0; i < L; i++) {
         const key = word.slice(0, i) + '*' + word.slice(i + 1);
         for (let neighbor of graph.get(key) || []) {
            if (neighbor === endWord) return level + 1;
            if (!visited.has(neighbor)) {
               visited.add(neighbor);
               queue.push([neighbor, level + 1]);
            }
         }
      }
   }
   return 0;
};

const beginWord = 'hit',
   endWord = 'cog',
   wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
console.log(ladderLength(beginWord, endWord, wordList));
