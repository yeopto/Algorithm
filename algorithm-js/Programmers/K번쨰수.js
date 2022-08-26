const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
  const answer = [];
  
  commands.map((command) => {
      let i = command[0];
      let j = command[1];
      let k = command[2];
      let arr = array
          .slice(i - 1, j)
          .sort((a, b) => a - b);
      answer.push(arr[k - 1]);
  })
  
  return answer;
}