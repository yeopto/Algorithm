const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [A, B] = fs.readFileSync(filePath).toString().split(' ');

function gcd(a, b) {
    const remainder = a % b;
    if (remainder === 0) return b;
    return gcd(b, remainder);
}

console.log(gcd(Number(A), Number(B)));
console.log(Number(A) * Number(B) / gcd(Number(A), Number(B)));