const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(input) {
  const [_, number] = input;
  const nums = number.split(' ');
  let count = 0;

  nums.forEach((el) => {
    if (isPrime(el)) count += 1;
  });

  return console.log(count);
}

solution(input);
