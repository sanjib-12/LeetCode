
function _Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
   if(!node) return;

   const oldToNew = new Map();

   const dfs = (node) => {
      const val = node.val;
      if(oldToNew.has(val)) return;
      const newNode = new _Node(val);
      oldToNew.set(val, newNode);
      const neighbors = [];
      for(let i = 0; i < node.neighbors.length; i++){
         dfs(node.neighbors[i]);
      }
      for(let i = 0; i < node.neighbors.length; i++){
         neighbors.push(oldToNew.get(node.neighbors[i].val));
      }
      newNode.neighbors = neighbors;
   }
   dfs(node)
   return oldToNew.get(1);
}; 


/*
Below are helper function.
AdjListToGraph is a function that is used to create graph for the given adjList.
graphTOAdjList is a function that is usd to create adjList from the given graph.
*/

const AdjListToGraph = (adjList) =>{
   const mapNode = new Map();

   //create all the node
   for(let i = 0; i < adjList.length; i++){
      mapNode.set(i+1, new _Node(i+1));
   }

   //establish all the connections
   for(let i = 0; i < adjList.length; i++){
      const currentNode = mapNode.get(i+1);

      for(let j = 0; j < adjList[i].length; j++){
         const neighborsVal = adjList[i][j];
         const neighbor = mapNode.get(neighborsVal);
         currentNode.neighbors.push(neighbor);
      }
   }
   return mapNode.get(1);
}

const graphTOAdjList = (node) => {
   if(!node) return [];

   const arrayMap = new Map();
   const result = [];

   const dfs = (node) => {
      const val = node.val;
      if(arrayMap.has(val)) return;
      const neighborVals = [];
      for(let i = 0 ;i < node.neighbors.length; i++){
         neighborVals.push(node.neighbors[i].val);
      }
      arrayMap.set(val, neighborVals)
      for(let i = 0 ;i < node.neighbors.length; i++){
         dfs(node.neighbors[i]);
      }
   }
   dfs(node);
   for(let i = 0; i < arrayMap.size; i++){
      result.push(arrayMap.get(i+1));
   }
   return result;
}

// const AdjListToGraph = (adjList) =>{
//    const mapNode = new Map();
//    for(let i = 0 ; i < adjList.length; i++){
//       let currentNode ;
//       if(mapNode.has(i+1)){
//          currentNode = mapNode.get(i+1)
//       }else{
//          currentNode = new _Node(i+1)
//          mapNode.set(i+1, currentNode);
//       }

//       for(let j = 0; j < adjList[i].length; j++){
//          if(mapNode.has(adjList[i][j])){
//             currentNode.neighbors.push(mapNode.get(adjList[i][j]))
//          }else{
//             const node = new _Node(adjList[i][j])
//             mapNode.set(adjList[i][j], node)
//             currentNode.neighbors.push(node)
//          }
//       }
//    }

//    return(mapNode.get(1));
// }

const adjList = [[2,4],[1,3],[2,4],[1,3]];
const graph = AdjListToGraph(adjList);
console.log(graph);
const answer = cloneGraph(graph)
const list = graphTOAdjList(answer);
console.log(list)