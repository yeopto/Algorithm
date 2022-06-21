const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = input[0];
let numbers = input[1].split('').map(x => parseInt(x));

solution();

function solution() {
    let result = 0;

    for (let i = 0; i < n; i++) {
        result += numbers[i];
    }

    console.log(result);
}