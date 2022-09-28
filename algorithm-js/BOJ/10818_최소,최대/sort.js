const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);
let arr = input[1].split(' ').map(x => Number(x));

solution();

function solution() {
    arr.sort((a, b) => a - b);

    console.log(arr[0], arr[N - 1]);
}