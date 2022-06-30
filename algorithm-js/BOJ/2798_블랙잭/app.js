const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let answer = 0;

function getCombination(arr, num) {
    let result = [];
    if (num === 1) return arr.map(el => [el]);

    arr.forEach((fixed, index, origin) => {
        let rest = origin.slice(index + 1);
        let combinations = getCombination(rest, num - 1);
        let attatched = combinations.map(combination => [fixed, ...combination]);
        result.push(...attatched);
    });

    return result;
}

getCombination(arr, 3).forEach(element => {
    let sum = element[0] + element[1] + element[2];
    let gap = m - sum;
    if (gap >= 0 && answer <= sum) {
        answer = sum;
    }
});

console.log(answer);