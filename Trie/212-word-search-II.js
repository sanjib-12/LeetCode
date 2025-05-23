/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
   if (!board || !board.length || !board[0].length || !words || !words.length) {
      return [];
   }

   const rowLen = board.length;
   const colLen = board[0].length;
   const result = new Set(); 
   const directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
   ];


   const root = buildTrie(words);


   for (let r = 0; r < rowLen; r++) {
      for (let c = 0; c < colLen; c++) {
         dfs(board, r, c, root, '', result, directions, rowLen, colLen);
      }
   }

   return Array.from(result);
};


function buildTrie(words) {
   const root = {};

   for (const word of words) {
      let node = root;

      for (const char of word) {
         node[char] = node[char] || {};
         node = node[char];
      }
      node.isEnd = word;
   }

   return root;
}

function dfs(board, r, c, node, path, result, directions, rowLen, colLen) {
   const char = board[r][c];

   if (!node[char]) return;

   const temp = board[r][c];
   board[r][c] = '#';

   node = node[char];
   path += temp;

   if (node.isEnd) {
      result.add(node.isEnd);
   }

   for (const [dr, dc] of directions) {
      const newR = r + dr;
      const newC = c + dc;
      if (
         newR >= 0 &&
         newR < rowLen &&
         newC >= 0 &&
         newC < colLen &&
         board[newR][newC] !== '#'
      ) {
         dfs(board, newR, newC, node, path, result, directions, rowLen, colLen);
      }
   }

   board[r][c] = temp;
}
//    if(!board || !board.length || !board[0].length || !words.length) return [];

//    const rowLen = board.length;
//    const colLen = board[0].length;
//    const result = new Set();
//    const directions = [[-1,0],[[0,1],[1,0],[0,-1]]];

//    const root = buildTire(words);

//    for(let r = 0; r < rowLen; r++){
//       for(let c = 0; c < colLen; c++){
//          dfs(board, r, c , root, "", result, directions, rowLen, colLen);
//       }
//    }
//    return Array.from(result);

// };

// function buildTire(words){
//    const root = {};

//    for(const word of words){
//       let node = root;

//       for(const char of word){
//          node[char] = node[char] || {};
//          node = node[char];
//       }
//       node.isEnd = word;
//    }
//    return root;
// }

// function dfs(board, r, c, node, path, result, directions, rowLen, colLen){
//    const char = board[r][c];

//    if(!node[char]) return;

//    const temp = board[r][c];
//    board[r][c] = "#";

//    node = node[char];
//    path += temp;

//    if(node.isEnd){
//       result.add(node.isEnd)
//    }

//    for(const [dr, dc] of directions){
//       const newR = r + dr;
//       const newC = c + dc;

//       if( newR >= 0 && newR < rowLen && newC >=0 && newC < colLen && board[newR][newC] !== '#'){
//          dfs(board, newR, newC, node, path, result, directions, rowLen, colLen);
//       }
//    }

//    board[r][c] = temp;
// }

// const rowLen = board.length;
// const colLen = board[0].length;
// const map = new Map();
// for (let r = 0; r < rowLen; r++) {
//    for (let c = 0; c < colLen; c++) {
//       let char = board[r][c];
//       if (!map.has(char)) map.set(char, []);
//       map.get(char).push([r, c]);
//    }
// }

// function dfs(index, wordLen, word, r, c, visited) {
//    visited.add(`${r}${c}`);
//    if (index === wordLen) return true;
//    let char = word[index];
//    if (!map.has(char)) return;
//    for (let pos of map.get(char)) {
//       let [r, c] = pos;
//       if (
//          r - 1 >= 0 &&
//          board[r - 1][c] === word[index + 1] &&
//          !visited.has(`${r - 1}${c}`)
//       )
//          if (dfs(index + 1, wordLen, word, r - 1, c, visited)) return true;
//       if (
//          c + 1 < colLen &&
//          board[r][c + 1] === word[index + 1] &&
//          !visited.has(`${r}${c + 1}`)
//       )
//          if (dfs(index + 1, wordLen, word, r, c + 1, visited)) return true;
//       if (
//          r + 1 < rowLen &&
//          board[r + 1][c] === word[index + 1] &&
//          !visited.has(`${r + 1}${c}`)
//       )
//          if (dfs(index + 1, wordLen, word, r + 1, c, visited)) return true;
//       if (
//          c - 1 >= 0 &&
//          board[r][c - 1] === word[index + 1] &&
//          !visited.has(`${r}${c - 1}`)
//       )
//          if (dfs(index + 1, wordLen, word, r, c - 1, visited)) return true;
//    }
// }

// const result = [];

// for (let word of words) {
//    const wordLen = word.length;
//    const visited = new Set();
//    if (map.has(word[0])) {
//       for (let pos of map.get(word[0])) {
//          let [r, c] = pos;
//          if (dfs(1, wordLen, word, r, c, visited)) result.push(word);
//       }
//    }
// }

// return result;
const board = [
      ['o', 'a', 'a', 'n'],
      ['e', 't', 'a', 'e'],
      ['i', 'h', 'k', 'r'],
      ['i', 'f', 'l', 'v'],
   ],
   words = ['oath', 'pea', 'eat', 'rain'];
console.log(findWords(board, words));
