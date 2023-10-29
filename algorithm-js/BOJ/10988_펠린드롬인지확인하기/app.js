const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const reverse = input.split('').reverse().join('');
  const answer = input === reverse ? 1 : 0;

  return console.log(answer);
}

solution(input);
