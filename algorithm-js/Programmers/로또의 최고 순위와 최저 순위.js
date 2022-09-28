/* 내 풀이 
function rank(n) {
  if (n === 6) return 1;
  else if (n === 5) return 2;
  else if (n === 4) return 3;
  else if (n === 3) return 4;
  else if (n === 2) return 5;
  else return 6
}

function solution(lottos, win_nums) {
  let answer = [];
  const zeroCount = lottos.filter(el => el === 0).length;
  const sameCount = lottos.filter(el => win_nums.includes(el)).length
  if (zeroCount === 6) {
    answer.push(1, 6);
  } else if (sameCount === 6) {
    answer.push(1, 1);
  } else {
    const [maxRankCount, minRankCount] = [sameCount + zeroCount, sameCount];
    answer.push(rank(maxRankCount), rank(minRankCount));
  }
  return answer;
}
*/

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  
  const zeroCount = lottos.filter(el => !el).length;
  const minCount = lottos.filter(el => win_nums.includes(el)).length
  const maxCount = zeroCount + minCount;
  
  return [rank[maxCount], rank[minCount]];
}