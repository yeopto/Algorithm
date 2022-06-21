const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n');

solution()

function solution() {
    let n = input[0];
    let word = input[1];
    let regex = /\d+/g;
    let result = word.match(regex);
    if (result !== null) {
        let answer = result.map(x => parseInt(x)).reduce((a,b) => a + b);
        console.log(answer);
    } else {
        console.log('0');
    }
}