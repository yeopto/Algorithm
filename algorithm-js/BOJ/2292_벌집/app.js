const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

let N = +input;

solution(N);

function solution(N) {
    let sum = 1
    let i = 1;

    while (sum < N) {
        sum += 6 * i;
        i++;
    }
    console.log(i);
}