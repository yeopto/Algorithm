const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString())

let result = 1;

for (let i = 1; i <= input; i++) {
  result = result * i
}

console.log(result);