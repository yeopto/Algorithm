const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(input) {
    const primeArr = [];
    const [N, K] = input.split(' ');

    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            primeArr.push(i);
        }
    }

    if (primeArr.length < K) return 0;

    primeArr.sort((a, b) => a - b);

    return primeArr[K - 1];
}

console.log(solution(input));