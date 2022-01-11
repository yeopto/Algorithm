const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);
let arr = input[1].split(' ').map(x => Number(x));

let min = arr[0];
let max = arr[0];

solution();

function solution() {
    for (let i = 1; i < N; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min, max);
}