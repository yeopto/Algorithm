const n = 118372;

function solution(n) {
  return +((n + "")
    .split("")
    .sort((a, b) => b - a)
    .join(""));
}

console.log(solution(n));