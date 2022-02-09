const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(input) {
    const RegExp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
    const answer = input.replace(RegExp, ' ');
    console.log(answer.length);
}