function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
      let check = 0;
      let num = 1;
      while(num <= i) {
          if (i % num === 0) {
              check++;
          }
          num++;
      }
      if (check % 2 === 0) {
          answer += i
      } else {
          answer -= i;
      }
  }
  
  return answer;
}

console.log(solution(13, 17));