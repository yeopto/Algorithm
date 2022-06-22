const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let A = input[1].split(' ').map(Number);
let B = input[2].split(' ').map(Number);

let answer = A.concat(B).sort((a, b) => a - b);

console.log(answer.join(' '));

// 다른 방식
// function solution(n, m, A, B) {
//     let answer = [];

//     let aIndex = 0,
//         bIndex = 0;

//     while (aIndex < n || bIndex < m) {
//         if (aIndex < n && bIndex < m) {
//             if (A[aIndex] > B[bIndex]) {
//                 answer.push(B[bIndex]);
//                 bIndex++;
//             } else {
//                 answer.push(A[aIndex]);
//                 aIndex++;
//             }
//         } else {
//             if (aIndex < n) {
//                 answer.push(...A.slice(aIndex));
//                 aIndex = n;
//             } else {
//                 answer.push(...B.slice(bIndex));
//                 bIndex = m;
//             }
//         }
//     }
//     console.log(answer.join(' '));
// }

// solution(n, m, A, B);