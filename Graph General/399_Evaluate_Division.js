/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
   const graph = new Map();

   //build the graph
   for(let i = 0; i < equations.length; i++){
      const[a,b] = equations[i];
      const val = values[i];

      if(!graph.has(a)) graph.set(a, new Map());
      if(!graph.has(b)) graph.set(b, new Map());

      graph.get(a).set(b,val);
      graph.get(b).set(a, 1 / val);
   }

   //DFS function
   const dfs = (start, end, visited) =>{
      if(!graph.has(start) || !graph.has(end)) return -1.0;
      if(start === end) return 1.0;

      visited.add(start);

      for(let [neighbor, value] of graph.get(start)){
         if(visited.has(neighbor)) continue;
         const result = dfs(neighbor, end, visited);
         if(result !== -1) return result * value
      }
      return -1.0;
   }

   //resolving each query
   const result = [];
   for(let [a, b] of queries){
      const visited = new Set();
      result.push(dfs(a,b,visited));
   }

   return result

};

const equations = [["a","b"],["a","c"],["d","e"],["d","f"],["a","d"],["aa","bb"],["aa","cc"],["dd","ee"],["dd","ff"],["aa","dd"],["a","aa"]], 
values = [2.0,3.0,4.0,5.0,7.0,5.0,8.0,9.0,3.0,2.0,2.0], 
queries = [["ff","a"]]
const result = calcEquation(equations, values, queries);
console.log(result);

