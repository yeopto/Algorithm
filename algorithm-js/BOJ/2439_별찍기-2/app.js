const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
let input1 = Number(input);
let result = "";

solution(input1);

function solution(A) {
    for(let i = 0; i < A; i++) {
        for(let j = (A - 1); j > i; j--) {
            result += " "; 
        }
        for(let k = 0; k <= i; k++) {
            result += "*";
        }
        result += "\n";
    }
    console.log(result);
}