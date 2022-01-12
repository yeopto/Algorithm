const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = input[0] * input[1] * input[2];
num = num.toString();

solution();

function solution() {
    for (let i = 0; i <= 9; i++) {
        let count = 0;
        
        for (let j = 0; j < num.length; j++) {
            if (Number(num[j]) === i) {
                count++;
            }
        }
        console.log(count);
    }    
}