const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(" ");

let input1 = Number(input[0]);
let input2 = Number(input[1]);

solution(input1, input2);

function solution(A, B) {
    if (A > B) {
        console.log(">");
    } else if (A < B) {
        console.log("<");
    } else {
        console.log("==");
    }
}