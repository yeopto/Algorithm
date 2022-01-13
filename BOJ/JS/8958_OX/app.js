const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = Number(input[0]);

solution();

function solution() {
    for (let i = 1; i <= N; i++) {
        let count = 0;
        let sum = 0;

        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === "O") {
                count++;
            } else {
                count = 0;
            }
            sum += count;
        }
        console.log(sum);
    }
}