const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n');

// 이진 탐색
const binarySearch = (num, startIndex, endIndex) => {
    if (endIndex < startIndex)
        return false;

    const mid = Math.floor((endIndex + startIndex) / 2);

    if (num === target[mid])
        return true;
    else if (num > target[mid])
        return binarySearch(num, mid + 1, endIndex);
    else if (num < target[mid])
        return binarySearch(num, startIndex, mid - 1);
};

const n = +input[0];
const m = +input[2];
const target = input[1].split(' ').map(x => Number(x)).sort((a, b) => a - b);
const check = input[3].split(' ').map(x => Number(x));

const result = check.reduce(
    (acc, cur) => (acc += (binarySearch(cur, 0, n - 1) ? 1 : 0) + ' '), ''
);

console.log(result);