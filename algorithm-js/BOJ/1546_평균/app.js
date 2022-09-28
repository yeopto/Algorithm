const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = Number(input[0]);
let score = input[1].split(' ').map((x) => Number(x));
let M = Math.max(...score);
let sum = 0;

solution();

function solution() {
    for (let i = 0; i < N; i++) {
        sum += (score[i] / M) * 100
    }
    console.log(sum / N);
}