const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString()

const n = +input;

let nArr = [];
for (let i = 1; i <= n; i++) {
    nArr.push(i);
}

const getPermutations = function(arr, num) {
    const results = [];
    if (num === 1) return arr.map(el => [el]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, num - 1);
        const attatched = permutations.map(permutation => [fixed, ...permutation]);
        results.push(...attatched);
    });

    return results
};

const answer = getPermutations(nArr, n);

answer.forEach(el => console.log(...el));