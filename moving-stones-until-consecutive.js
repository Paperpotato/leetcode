const { mkdirSync } = require('fs');

var numMovesStones = function(a, b, c) {
    let arr = [a, b, c]
    arr.sort(function(a, b){return a-b})
    let max = arr[arr.length - 1]
    let min = arr[0]
    let mid = arr[1]
    console.log(arr)
    let maxSteps = max - min - 2
    console.log(maxSteps)
    if (max - mid === 2 || max - mid === 1 || mid - min === 2 || mid - min === 1) {
        minSteps = 1
    } else {
        minSteps = 2
    }
    minSteps = maxSteps === 0 ? 0 : minSteps
    let answer = [minSteps, maxSteps]
    return answer
};

console.log(numMovesStones(21, 27, 3) )