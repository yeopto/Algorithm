const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const answerNum = [];

solution();

function solution() {
    input.forEach((x) => {
        const num = x % 42;

        if (answerNum.indexOf(num) === -1) {
            answerNum.push(num);
        }
    });

    console.log(answerNum.length);
}