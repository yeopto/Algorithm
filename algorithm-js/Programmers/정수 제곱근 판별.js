const n = 121

function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

console.log(solution(n));