// You are given a char array representing tasks CPU need to do. It contains capital letters A to Z where each letter represents a different task. Tasks could be done without the original order of the array. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

// You need to return the least number of units of times that the CPU will take to finish all the given tasks.

 

// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: 
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.
// Example 2:

// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// And so on.
// Example 3:

// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation: 
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
 

// Constraints:

// The number of tasks is in the range [1, 10000].
// The integer n is in the range [0, 100].

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let intervalCounter = 0;
    let finishedTaskCounter = 0;
    let amountMap = {};
    let cooldownMap = {};
    let sortedDiffTasks = [];
    for(let task of tasks){
        if(amountMap[task]){
            amountMap[task]++;
        }else{
            amountMap[task] = 1;
            cooldownMap[task] = n;
            sortedDiffTasks.push(task);
        }
    }
    sortedDiffTasks.sort(function(a,b){
        return amountMap[b] - amountMap[a];
    });
    // console.log(sortedDiffTasks);
    while(finishedTaskCounter < tasks.length){
        intervalCounter++;
        for(let i=0;i<sortedDiffTasks.length;i++){
            let pt = sortedDiffTasks[i];
            if(amountMap[pt] > 0 && cooldownMap[pt] >= n){
                finishedTaskCounter++
                amountMap[pt]--;
                cooldownMap[pt] = -1;
                // Is this necessary??----
                if(amountMap[pt] == 0){
                    let temp = sortedDiffTasks[sortedDiffTasks.length - 1];
                    sortedDiffTasks[i] = temp;
                    sortedDiffTasks.pop();
                }
                // --------------
                sortedDiffTasks.sort(function(a,b){
                    return amountMap[b] - amountMap[a];
                });
                break;
            }
        }
        for(let ct in cooldownMap){
            cooldownMap[ct]++;
        }
    }
    return intervalCounter;
};

console.log(leastInterval(["A","A","A","B","B","B"], 2));
console.log(leastInterval(["A","A","A","B","B","B"], 0));
console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2));
console.log(leastInterval(["A","A","A","B","B","B",'C','C','C','C'], 3));