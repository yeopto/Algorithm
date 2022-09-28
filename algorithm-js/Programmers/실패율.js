function solution(N, stages) {
  let answer = [];
  for (let stage = 1; stage <= N; stage++) {
    let reachStage = stages.filter(el => el >= stage).length;
    let notClearStage = stages.filter(el => el === stage).length;
    answer.push([stage, notClearStage / reachStage]);
  }
  answer.sort((a, b) =>  b[1] - a[1]);
  
  return answer.map(el => el[0]);
}