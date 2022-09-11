const n = 123;

function solution(n) {
  const answer = String(n);
  return answer
    .split("")
    .map(el => +el)
    .reduce((acc, cur) => acc + cur);
}

console.log(solution(n));