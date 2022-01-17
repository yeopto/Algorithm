const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = Number(input[0]);

solution(N);

function solution(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        let hundNum = Math.floor((i % 1000) / 100);
        let tenNum = Math.floor((i % 100) / 10);
        let oneNum = i % 10;

        if (i < 100) {
            count++;
        } else if (i >= 100 && i < 1000) {
            if (hundNum - tenNum === tenNum - oneNum) {
                count++;
            }
        }
    }
    console.log(count);
}