const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let str = input[0].trim();
let boom = input[1].trim();
let len = boom.length;
let stack = [];

for (let i = 0; i < str.length; i++) {
    let flag = false;
    if (str[i] === boom[len - 1]) {
        for (let j = 0; j < len - 1; j++) {
            if (stack[stack.length - (j + 1)] === boom[len - (j + 2)]) {
                continue;
            }
            flag = true;
            break;
        }
        if (flag) {
            stack.push(str[i]);
        } else {
            for (let k = 0; k < len - 1; k++) {
                stack.pop();
            }
        }
    } else {
        stack.push(str[i]);
    }
}

let result = stack.join('');
if (result === '') {
    console.log('FRULA');
} else {
    console.log(result);
}