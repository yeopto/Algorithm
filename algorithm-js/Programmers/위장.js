const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

function solution(clothes) {
  let answer = 1;
  let sorts = {};
  
  for (let cloth of clothes) {
    if (sorts[cloth[1]]) {
      sorts[cloth[1]]++;
    } else {
      sorts[cloth[1]] = 1;
    }
  }
  
  for (let i of Object.keys(sorts)) {
    answer *= sorts[i] + 1;
  }

  return answer - 1;
}

console.log(solution(clothes));