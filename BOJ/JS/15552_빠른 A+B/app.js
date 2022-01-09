const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let output = '';
for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');
    output += Number(numbers[0]) + Number(numbers[1]) + "\n";
}

console.log(output);