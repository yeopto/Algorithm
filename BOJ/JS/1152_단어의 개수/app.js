const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let words = input.split(' ');
let cnt = 0;

solution();

function solution() {
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            cnt++;
        }
    }
    console.log(cnt);
}