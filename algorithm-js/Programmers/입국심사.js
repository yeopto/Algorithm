const n = 6;
const times = [7, 10];

function solution(n, times) {
  times.sort((a, b) => (a - b));
  let left = 0;
  let right = times[times.length - 1] * n;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const count = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (count >= n) {
      right = mid - 1;
    } else if (count < n) {
      left = mid + 1;
    }
  }
  return left;
}

console.log(solution(n, times));