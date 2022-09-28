const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let a = input[0].split('').reverse().join('');
let b = input[1].split('').reverse().join('');

solution(+a, +b);

function solution(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}