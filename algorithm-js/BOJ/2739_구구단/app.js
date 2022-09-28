const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
let input1 = Number(input);

solution(input1);

function solution(A) {
    for (let i = 1; i < 10; i++) {
        console.log(`${A} * ${i} = ${A * i}`);
    }
}