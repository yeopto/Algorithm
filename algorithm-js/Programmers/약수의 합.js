const n = 0;

function solution(n) {
  let answer = [];
  let i = 0;
  while (i <= n) {
    if (n === 0) return 0;
    if (n % i === 0) {
      answer.push(i);
    }
    i++;
  }

  return answer.reduce((acc, cur) => acc + cur); 
}

console.log(solution(n));