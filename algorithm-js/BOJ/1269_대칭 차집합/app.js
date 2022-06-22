const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let A = new Set(input[1].split(' ').map(Number));
let B = new Set(input[2].split(' ').map(Number));
let answer = new Set([...A, ...B]);

solution();

function solution() {
    A.forEach((a) => {
        if (B.has(a)) {
            answer.delete(a);
        }
    });
    console.log(answer.size);
}