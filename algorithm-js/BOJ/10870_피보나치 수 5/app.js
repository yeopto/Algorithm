const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

function fibo(n) {
    const fibo = [];
    fibo[0] = 0;
    fibo[1] = 1;
    if (n < 2) return fibo[n];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo[n];
}

console.log(fibo(Number(input)));
