const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((progress, index) => 
    Math.ceil((100 - progress) / speeds[index])
  );
  let count = 1;
  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      maxDay = days[i];
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);
  
  return answer;
}

console.log(solution(progresses, speeds))