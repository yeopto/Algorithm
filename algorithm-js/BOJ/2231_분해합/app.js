const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = parseInt(fs.readFileSync(filePath).toString().trim());

let constructorArr = [];

function d(n) {
    const N = n.toString().split('');

    return n + N.reduce((acc, num) => (acc += parseInt(num)), 0);
}

for (let i = 1; i <= input; i++) {
    if(d(i) === input) {
        constructorArr.push(i);
    }
}

if (constructorArr.length) {
    console.log(Math.min(...constructorArr));
} else {
    console.log(0);
}