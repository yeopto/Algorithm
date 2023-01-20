const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(input) {
    let answer = 0;
    let inNum = 0;
    
    input.forEach((el) => {
        const [A, B] = el.split(' ').map(Number);
        inNum = inNum - A + B

        if (answer < inNum) {
            answer = inNum;
        }
    });

    return answer;
}

console.log(solution(input));