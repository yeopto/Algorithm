const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = Number(input[0]);

solution();

function solution() {
    for (let i = 1; i <= num; i++) {
        let score = input[i].split(' ').map(x => Number(x));
        let num2 = score.shift();
        let count = 0;

        let avg = score.reduce((acc, v) => acc += v);
        
        avg /= num2;
    
        for (let j = 0; j < num2; j++) {
            if (score[j] > avg) {
                count++;
            }
        }
        let result = ((count / num2) * 100).toFixed(3);
        
        console.log(result + "%");
    }
}