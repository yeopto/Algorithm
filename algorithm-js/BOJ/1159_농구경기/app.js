const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.shift();

function solution(input) {
  const obj = {};
  let result = "";

  for (let i = 0; i < input.length; i++) {
    if (obj[input[i][0]]) {
      obj[input[i][0]]++;
    } else {
      obj[input[i][0]] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] >= 5) {
      result += key;
    }
  }

  return console.log(result.length === 0 ? "PREDAJA" : result);
}

solution(input);
