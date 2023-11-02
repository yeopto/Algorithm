const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, k, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);

function permutation(arr, selectNumber) {
  const result = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = permutation(rest, selectNumber - 1);
    const attatched = permutations.map((el) => [fixed, ...el].join(""));
    result.push(...attatched);
  });

  return result;
}

const answer = new Set(permutation(arr, k));

console.log(answer.size);
