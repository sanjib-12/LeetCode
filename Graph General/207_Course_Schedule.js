/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
   
   const graph = new Map()

   for( let i = 0; i < numCourses; i++){
      graph.set(i,[]);
   }

   //create the graph with the course
   for( let [post, pre] of prerequisites){

      //if(!graph.has(post)) graph.set(post, []);

      if(graph.has(post)) graph.get(post).push(pre);
   }

   const visitSet = new Set();
   const dfs = (crs) => { 

      if ( visitSet.has(crs) ) return false;
      if ( graph.get(crs).length === 0 ) return true;

      visitSet.add(crs);
      for( let pre of graph.get(crs)){
         if(!dfs(pre)) return false;
      }
      
      visitSet.delete(crs);
      graph.set(crs, []);
      return true;
   }

   for (let i = 0; i < numCourses; i++){
      if(!dfs(i)) return false;

   }

   return true;


};

const numCourses = 2, prerequisites = [[1,0]];
console.log(canFinish(numCourses, prerequisites));