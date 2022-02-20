const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let A = Number(input[0]);
let B = Number(input[1]);
let V = Number(input[2]);

solution(A,B,V);

function solution(A,B,V) {
    console.log(Math.ceil((V - B) / (A - B)));
}