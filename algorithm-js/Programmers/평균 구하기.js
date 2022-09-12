const arr = [1,2,3,4];

function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

console.log(solution(arr));