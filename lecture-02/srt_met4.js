//timer.js
const startTime = Date.now();

function someHeavyTask() {
    for (let i = 0; i < 5e7; i++) {
        Math.sqrt(i);
    }
}

someHeavyTask();

const endTime = Date.now();
const timeTaken = endTime - startTime;
console.log(`Time taken for the task: ${timeTaken} milliseconds`);