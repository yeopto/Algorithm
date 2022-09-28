const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const divNum = input.map(x => x % 42);

solution();

function solution() {
    "use strict";
    const set = new Set(divNum);
    const answer = [...set];
    console.log(answer.length);
}