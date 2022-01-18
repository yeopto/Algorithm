const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution();

function solution() {
    const num1 = input.shift();

    for (let i = 0; i < num1; i++) {
        const [num2, str] = input[i].split(' ');
        let answer = '';

        for (let j = 0; j < str.length; j++) {
                answer += str[j].repeat(num2);
            }
            console.log(answer);
        }
    }