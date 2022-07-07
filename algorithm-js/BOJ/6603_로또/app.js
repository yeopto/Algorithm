const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const getCombinations = function(arr, num) {
    const result = [];
    if (num === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, num -1);
        const attatched = combinations.map((combination) => [fixed, ...combination]);
        result.push(...attatched);
    });
    return result;
}

let i = 0;
while (true) {
    if (input[i][0] === '0')
        break;
    
    let arr = input[i].split(' ');
    let k = arr.shift();
    let answer = getCombinations(arr, 6);
    answer.forEach((el) => {
        console.log(...el);
    });
    console.log(' ');
    i++;
}