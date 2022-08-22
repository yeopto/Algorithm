const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }
}

console.log(solution(participant, completion));