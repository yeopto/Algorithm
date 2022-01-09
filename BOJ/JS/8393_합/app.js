const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
let input1 = Number(input);

solution(input1);

function solution(A) {
    let sum = 0;
    for (let i = 1; i <= A; i++) {
        sum += i;
    }
    console.log(sum);
}