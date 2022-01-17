const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let S = fs.readFileSync(filePath).toString();

const result = [];

solution();

function solution() {
    for (let i = 97; i <= 122; i++) {
        result.push(S.indexOf(String.fromCharCode(i)))
    }

    console.log(result.join(" "));
}