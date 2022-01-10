const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
let input1 = Number(input);
let result = "";

solution(input1);

function solution(A) {
    for(let i = 0; i < A; i++) {
        for(let j = 0; j <= i; j++) {
            result += "*"; 
        }
        result += "\n";
    }
    console.log(result);
}