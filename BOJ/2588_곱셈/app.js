const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let input1 = Number(input[0]);
let input2 = Number(input[1]);

solution(input1, input2);

function solution(A, B) {
    const stringB = String(B);
    const one = Number(stringB[2]);
    const ten = Number(stringB[1]);
    const hund = Number(stringB[0]);

    console.log(A * one);
    console.log(A * ten);
    console.log(A * hund);
    console.log(A * B);
}