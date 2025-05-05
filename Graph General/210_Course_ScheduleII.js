/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
   const graph = new Map();

   for( let i = 0; i < numCourses; i++){
      graph.set(i, []);
   }

   for (let [crs, pre] of prerequisites){
      graph.get(crs).push(pre);
   }

   const result = [];
   const visited = new Set();
   const visiting = new Set();

   const dfs = ( crs ) => {
      if( visiting.has(crs)) return false; // loop detected
      if( visited.has(crs)) return true; // already processed

      visiting.add(crs);

      for( let pre of graph.get(crs)){
         if(!dfs(pre)) return false;
      }

      visiting.delete(crs);
      visited.add(crs);
      result.push(crs);
      return true;
   }


   for( let i = 0; i < numCourses; i++){
      if(!dfs(i)) return []
   }

   return result;

};

const numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]];
console.log(findOrder(numCourses, prerequisites));