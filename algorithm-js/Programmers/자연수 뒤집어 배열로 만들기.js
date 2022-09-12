const n = 23154;

function solution(n) {
  return (n + "")
      .split("")
      .reverse()
      .map(el => +el);
}

console.log(solution(n));