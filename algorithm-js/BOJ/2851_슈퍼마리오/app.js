const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let mushroom = fs.readFileSync(filePath).toString().split("\n");

function solution(mushroom) {
  let score = 0;
  let targetScore = 100;
  let min = Number.MAX_SAFE_INTEGER;
  let diff = 0;
  let answer = 0;

  mushroom.forEach((el) => {
    score += parseInt(el);
    diff = Math.abs(score - targetScore);
    if (diff <= min) {
      min = diff;
      answer = Math.max(answer, score);
    }
  })

  return console.log(answer);
}

solution(mushroom);