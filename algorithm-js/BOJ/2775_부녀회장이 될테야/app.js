const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = Number(input.shift());

solution();

function solution() {
    for (let i = 0; i < T; i++) {
        const k = +input.shift();
        const n = +input.shift();

        const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
        

    }   
}