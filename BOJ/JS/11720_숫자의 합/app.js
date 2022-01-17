const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = input[0];
let numbers = input[1].split('').map(x => Number(x));

solution();

function solution() {
    let result = 0;

    for (let i = 0; i < N; i++) {
        result += numbers[i];
    }

    console.log(result);
}