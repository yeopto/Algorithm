const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
let input1 = Number(input);

solution(input1);

function solution(A) {
    if ((A % 4 === 0 && A % 100 !== 0) || A % 400 === 0) {
        console.log("1");
    } else {
        console.log("0");
    }
}