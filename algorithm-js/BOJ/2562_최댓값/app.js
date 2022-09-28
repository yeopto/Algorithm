const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n").map(x => Number(x));

let max = input[0];
let maxIndex = 0;

solution();

function solution() {
    for (let i = 1; i < 9; i++) {
        if (input[i] > max) {
            max = input[i];
            maxIndex = i;
        }
    }
    console.log(max);  
    console.log(maxIndex + 1);
}