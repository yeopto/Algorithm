const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString()

let n = parseInt(input);
let k = 2;

while (n !== 1) {
    if (n % k === 0) {
        console.log(k);
        n /= k;
    } else {
        k++;
    }
}