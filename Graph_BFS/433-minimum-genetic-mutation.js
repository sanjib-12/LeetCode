/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
   if(bank.length === 0) return -1;
   const queue = [[startGene, 0]]// [startpoint, count];
   const choices = ['A','C','G','T'];
   const visited = new Set();
   visited.add(startGene);
   while(queue.length > 0){
      let [currentGene, count] = queue.shift();
      for(let newMuted of bank){
         let checker = 0;
         for(let i = 0; i < newMuted.length; i++){
            if(newMuted[i] !== currentGene[i]) checker++;
         }
         if(checker === 1 && !visited.has(newMuted)){
            if(newMuted === endGene) return count+1;
            queue.push([newMuted, count+1]);
            visited.add(newMuted);
         }

      }
   }
   return -1;
}
// var minMutation = function(startGene, endGene, bank) {
//    if (bank.length === 0) return -1;

//    if(!bank.includes(endGene)) return -1;

//    let count = 0;
//    for(let i = 0; i < startGene.length;i++){
//       if(startGene[i] !== endGene[i]) count++;
//    }
//    if(count>0) return count;
//    else return -1;
// }
const startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
console.log(minMutation(startGene, endGene, bank));

