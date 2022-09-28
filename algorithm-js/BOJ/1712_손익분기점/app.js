const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let A = +input[0];
let B = +input[1];
let C = +input[2];

solution(A, B, C);

function solution(A, B, C) {
    let answer = Math.floor(A / (C - B)) + 1;
    B >= C ? (answer = -1) : answer;
    console.log(answer);
}