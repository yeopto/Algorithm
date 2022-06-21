const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

if (input[0] === '0' && input[1] === 'x') {
    console.log(parseInt(input, 16));
} else if (input[0] === '0' && input[1] !== 'x') {
    console.log(parseInt(input, 8));
} else {
    console.log(input)
}