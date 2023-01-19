const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input.shift();

function solution(input) {
    const answer = [];
    
    input.forEach((el) => {
        const temp = [];
        const binary = Number(el).toString(2);
        const reverseBinary = [...binary].reverse();
        reverseBinary.forEach((_, i) => {
            if (reverseBinary[i] === '1') temp.push(i);
        });
        answer.push(temp.join(' '));
    });

    return answer.join('\n');
}

console.log(solution(input));
