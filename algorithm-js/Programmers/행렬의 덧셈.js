function solution(arr1, arr2) {
  let answer = [];
  arr1.map((row, rowIndex) => {
    answer.push(row.map((col, colIndex) => col + arr2[rowIndex][colIndex]))
  });
  
  return answer;
}