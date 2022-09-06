const answers = [1,2,3,4,5];

function solution(answers) {
  let result = [];
  let supoFirst = [1,2,3,4,5];
  let supoSecond = [2,1,2,3,2,4,2,5];
  let supoThird = [3,3,1,1,2,2,4,4,5,5];

  let supoFirstRes = answers.filter((answer, i) => answer === supoFirst[i % supoFirst.length]).length
  let supoSecondRes = answers.filter((answer, i) => answer === supoSecond[i % supoSecond.length]).length
  let supoThirdRes = answers.filter((answer, i) => answer === supoThird[i % supoThird.length]).length
  let max = Math.max(supoFirstRes, supoSecondRes, supoThirdRes);

  if (supoFirstRes === max) {
    result.push(1);
  }
  if (supoSecondRes === max) {
    result.push(2);
  }
  if (supoThirdRes === max) {
    result.push(3);
  }

  return result;
}

console.log(solution(answers));