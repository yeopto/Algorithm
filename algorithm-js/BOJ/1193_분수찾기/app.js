const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

let X = Number(input);

solution(X);

function solution(n) {
    let groupCounter = 0;
    let ascendingNumArr = [];
    let decendingNumArr = [];

    while (n > 0) {
        groupCounter++;
        n -= groupCounter;
    }

    for (let i = 0; i < groupCounter; i++) {
        ascendingNumArr.push(i + 1);
        decendingNumArr.push(groupCounter - i);
    }

    if (groupCounter % 2 === 0) {
        console.log(`${ascendingNumArr[groupCounter - 1 + n]}/${decendingNumArr[groupCounter - 1 + n]}`);
    } else {
        console.log(`${decendingNumArr[groupCounter - 1 + n]}/${ascendingNumArr[groupCounter - 1 + n]}`);
    }
}