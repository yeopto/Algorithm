function getDivCnt(num) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          if (num / i === i) cnt += 1;
          else cnt += 2;
      }
  }
  return cnt;
}

function solution(number, limit, power) {
  const divCntArr = new Array(number + 1).fill(0);
  return divCntArr
      .map((_, i) => {
        if (getDivCnt(i) > limit) return power;
        return getDivCnt(i);
      })
      .reduce((acc, cur) => acc + cur, 0);
}