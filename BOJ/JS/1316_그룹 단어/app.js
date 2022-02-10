const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();
let countGroupWord = 0;

solution();

function solution() {
    for (let i = 0; i < +N; i++) {
        const word = input[i];
        let letter = [];
        let isGroupWord = true;

        for (let j = 0; j < word.length; j++) {
            if (letter.indexOf(word[j]) === -1) {
                letter.push(word[j]);
            } else {
                if (letter.indexOf(word[j]) !== letter.length - 1) {
                    isGroupWord = false;
                    break;
                }
            }
        }
        if (isGroupWord) {
            countGroupWord += 1;
        }
    }
    console.log(countGroupWord);
}