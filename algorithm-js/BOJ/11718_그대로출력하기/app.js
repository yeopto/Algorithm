const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString()

function solution(input) {
  return input.forEach((el) => console.log(el));
}

solution(input);
