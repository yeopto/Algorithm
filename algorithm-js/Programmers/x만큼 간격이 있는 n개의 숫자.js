function solution(x, n) {
  return Array.from(new Array(n), (_, i) => x * (i + 1));
}