function solution(a, b) {
  const answer = a.map((el, i) => a[i] * b[i]);
  return answer.reduce((acc, cur) => acc + cur, 0);
}