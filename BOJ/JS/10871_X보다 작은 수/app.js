const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let inputs = [];
inputs = input[0].split(' ');

let N = Number(inputs[0]);
let X = Number(inputs[1]);
let A = input[1].split(' ');

let result = '';

solution();

function solution() {
    for(let i = 0; i < N; i++) {
        if (Number(A[i]) < X) {
            result += A[i] + ' ';
        }
    }
    console.log(result);
}