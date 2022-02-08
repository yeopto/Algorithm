const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let sum = 0;
const alphabets = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
};

solution();

function solution() {
    for (let i = 0; i < input.length; i++) {
        for (key in alphabets) {
            if (key.includes(input[i])) {
                sum += alphabets[key];
            }
        }
    }

    console.log(sum);
}