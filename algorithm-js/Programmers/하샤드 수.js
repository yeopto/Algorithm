function solution(x) {
  return x % ((x + "").split("").map(el => +el).reduce((acc, cur) => acc + cur)) === 0 ? true : false;
}